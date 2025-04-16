// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     tailwindcss: {},
//   },
// };

// export default config;

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Agregué autoprefixer porque lo tienes en devDependencies y es común usarlo con Tailwind
  },
};