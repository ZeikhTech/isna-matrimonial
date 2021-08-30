const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: "http://localhost:3000/",
    MONGO_URL:
      "mongodb+srv://sightings:YnKYf8qPDWYKP2Rd@cluster0.zucpt.mongodb.net/?retryWrites=true&w=majority",
  },
};
// module.exports = withPlugins([withImages], {
//   webpack: (config) => {
//     config.node = {
//       fs: "empty",
//     };
//     config.module.rules.push({
//       test: /\.(glb|gltf|bin)$/,
//       use: {
//         loader: "file-loader",
//       },
//     });
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery",
//         "window.jQuery": "jquery",
//       })
//     );
//     return config;
//   },
// });
