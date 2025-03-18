import chalk from "chalk";
import fs from "fs";
import path from "path";
import https from "https";
import { buildSync } from "esbuild"; // Importar esbuild

const install = async (component) => {
  const baseDir = path.join(process.cwd(), "node_modules", "culture-ui");
  const componentDir = path.join(baseDir, component);
  const indexJsPath = path.join(baseDir, "index.js");
  const indexDtsPath = path.join(baseDir, "index.d.ts");

  // URL de los archivos en S3
  const tsxUrl = `https://culture-ui-document.s3.us-east-2.amazonaws.com/uploads/${component}.tsx`;
  const dTsUrl = `https://culture-ui-document.s3.us-east-2.amazonaws.com/uploads/${component}.d.ts`;

  const checkFileExists = (url) => {
    return new Promise((resolve) => {
      const request = https.request(url, { method: "HEAD", timeout: 5000 }, (res) => {
        resolve(res.statusCode === 200);
      });

      request.on("error", () => resolve(false));
      request.on("timeout", () => resolve(false));
      request.end();
    });
  };

  try {
    // Verificar si el archivo `.tsx` existe antes de descargarlo
    const tsxExists = await checkFileExists(tsxUrl);
    if (!tsxExists) throw new Error(`${component}.tsx no es un componente válido`);

    console.log(chalk.green(`${component}.tsx encontrado, comenzando la descarga...`));

    // Crear la carpeta del componente si no existe
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    }

    // Función para descargar archivos
    const downloadFile = (url, filename) =>
      new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(componentDir, filename));
        https.get(url, (response) => {
          response.pipe(file);
          file.on("finish", () => file.close(resolve));
        }).on("error", reject);
      });

    // Descargar el archivo `.tsx`
    await downloadFile(tsxUrl, `${component}.tsx`);

    // Verificar si el `.d.ts` existe en S3 antes de descargarlo
    const dtsExists = await checkFileExists(dTsUrl);
    if (dtsExists) {
      console.log(chalk.green(`${component}.d.ts encontrado, descargando...`));
      await downloadFile(dTsUrl, `${component}.d.ts`);
    } else {
      console.log(chalk.yellow(`${component}.d.ts no encontrado, generando archivo vacío.`));
      fs.writeFileSync(path.join(componentDir, `${component}.d.ts`), "");
    }

    // Rutas de los archivos
    const tsxPath = path.join(componentDir, `${component}.tsx`);
    const jsPath = path.join(componentDir, `${component}.js`);
    const dtsPath = path.join(componentDir, `${component}.d.ts`);

    // ✅ **Transformar `.tsx` a `.js` con `esbuild`**
    buildSync({
      entryPoints: [tsxPath],
      outfile: jsPath,
      bundle: true,
      format: "esm", // Soporta `import/export`
      platform: "browser",
      loader: { ".tsx": "tsx" },
    });

    console.log(chalk.green(`${component}.tsx transformado a ${component}.js correctamente.`));

    // ✅ **Crear `package.json` del componente**
    fs.writeFileSync(
      path.join(componentDir, "package.json"),
      JSON.stringify(
        {
          name: `culture-ui-${component}`,
          main: `${component}.js`,
          types: `${component}.d.ts`,
        },
        null,
        2
      )
    );

    console.log(chalk.green(`${component} instalado con éxito en node_modules/culture-ui/${component}`));

    // ✅ **Actualizar index.js en node_modules/culture-ui/**
    let existingExportsJs = fs.existsSync(indexJsPath) ? fs.readFileSync(indexJsPath, "utf-8") : "";
    const newExportJs = `export { default as ${component} } from './${component}/${component}.js';\n`;

    if (!existingExportsJs.includes(newExportJs)) {
      fs.appendFileSync(indexJsPath, newExportJs);
      console.log(chalk.green(`Componente ${component} añadido correctamente a index.js`));
    }

    // ✅ **Actualizar index.d.ts en node_modules/culture-ui/**
    let existingExportsDts = fs.existsSync(indexDtsPath) ? fs.readFileSync(indexDtsPath, "utf-8") : "";
    const newExportDts = `export { default as ${component} } from './${component}/${component}.d.ts';\n`;

    if (!existingExportsDts.includes(newExportDts)) {
      fs.appendFileSync(indexDtsPath, newExportDts);
      console.log(chalk.green(`Definición de tipos de ${component} añadida correctamente a index.d.ts`));
    }

    // Salir del proceso con éxito
    process.exit(0);
  } catch (error) {
    console.error(chalk.red("Error:", error.message));

    // No crear la carpeta si el componente no existe
    if (fs.existsSync(componentDir)) {
      fs.rmdirSync(componentDir, { recursive: true });
    }

    // Salir con código de error
    process.exit(1);
  }
};

export default install;

