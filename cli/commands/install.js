import chalk from "chalk";
import fs from "fs";
import path from "path";
import https from "https";

const install = async (component) => {
  const url = `https://culture-ui-document.s3.us-east-2.amazonaws.com/uploads/${component}.tsx`;
  const componentPath = path.join(process.cwd(), "node_modules", "culture-ui", component);
  const indexPath = path.join(process.cwd(), "node_modules", "culture-ui", "index.js");

  const checkFileExists = (url) => {
    return new Promise((resolve, reject) => {
      const request = https.request(url, { method: "HEAD", timeout: 5000 }, (res) => {
        if (res.statusCode === 200) {
          resolve(true);  // El archivo existe
        } else {
          reject(new Error(`${component} no es componente valido`)); // El archivo no existe
        }
      });

      request.on("error", (error) => reject(new Error(`Error en la conexión: ${error.message}`)));
      request.on("timeout", () => reject(new Error("Tiempo de espera agotado")));
      request.end();
    });
  };

  try {
    // Verificar si el archivo existe antes de intentar descargarlo
    await checkFileExists(url);
    console.log(chalk.green(`${component}.tsx, comenzando la descarga...`));

    // Crear la carpeta para el componente si no existe
    if (!fs.existsSync(componentPath)) {
      fs.mkdirSync(componentPath, { recursive: true });
    }

    // Función para descargar el archivo
    const downloadFile = (filename) =>
      new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(componentPath, filename));
        https.get(url, (response) => {
          response.pipe(file);
          file.on("finish", () => file.close(resolve));
        }).on("error", reject);
      });

    const filename = `${component}.tsx`;
    await downloadFile(filename);

    // Crear el package.json dentro de la carpeta del componente
    fs.writeFileSync(
      path.join(componentPath, "package.json"),
      JSON.stringify(
        {
          name: `culture-ui-${component}`,
          main: `${component}.tsx`,
        },
        null,
        2
      )
    );

    console.log(chalk.green(`${component} instalado con éxito en node_modules/culture-ui/${component}`));

    // Asegurarse de que el archivo index.js exista o crear uno si no
    if (!fs.existsSync(indexPath)) {
      let existingExports = '';
      // Revisar si el archivo index.js ya tiene exportaciones
      if (fs.existsSync(indexPath)) {
        existingExports = fs.readFileSync(indexPath, 'utf-8');
      }

      const newExport = `export { default as ${component} } from './${component}/${component}.tsx';\n`;

      // Escribir las nuevas exportaciones en el index.js
      fs.appendFileSync(indexPath, existingExports + newExport);
    }

    console.log(chalk.green(`Componente añadido correctamente a index.js`));

    // Salir del proceso con éxito
    process.exit(0);
  } catch (error) {
    console.error(chalk.red("Error:", error.message));

    // No crear la carpeta si el componente no existe
    if (fs.existsSync(componentPath)) {
      fs.rmdirSync(componentPath, { recursive: true });
    }

    // Salir con código de error
    process.exit(1);
  }
};

export default install;
