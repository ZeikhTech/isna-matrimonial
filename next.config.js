const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: "http://localhost:3000/",
    // BASE_URL: "https://isna-matrimonial.herokuapp.com/",

    MONGO_URL:
      "mongodb+srv://sightings:YnKYf8qPDWYKP2Rd@cluster0.zucpt.mongodb.net/?retryWrites=true&w=majority",
      secretOrPrivateKey:"c2RzYWRhc2RzZHNhZHNhZGFzZmRmZHNmc2RnZHNnZHNzZ3IzMnJld2Y0MzU0Zmd2NTR0Zg==",
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
