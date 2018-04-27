const WebpackPwaManifest = require("webpack-pwa-manifest");
const autoprefixer = require("autoprefixer");

module.exports = {
  modify: (baseConfig, { target, dev }, webpack) => {
    console.log("loading custom webpack config settings from razzle.config...");
    const appConfig = Object.assign({}, baseConfig);
    const isServer = target !== "web";

    const postCssLoader = {
      loader: "postcss-loader",
      options: {
        ident: "postcss",
        sourceMap: true,
        plugins: () => [
          autoprefixer({
            browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]
          })
        ]
      }
    };

    appConfig.module.rules.push({
      test: /.scss$/,
      use: isServer
        ? ["css-loader", "sass-loader"]
        : [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            postCssLoader,
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
    });

    if (!isServer && !dev) {
      appConfig.devtool =
        process.env.NODE_ENV === "test"
          ? false
          : process.env.NODE_ENV === "production"
            ? "source-map"
            : "cheap-eval-source-map";
      appConfig.plugins.push(
        new WebpackPwaManifest({
          name: "Qmerit React Demo",
          short_name: "QmeritApp",
          description: "Qmerit React Demo",
          background_color: "#efefef",
          start_url: "/",
          display: "standalone",
          theme_color: "#3B64C2",
          fingerprints: false,
          icons: [
            {
              src: "src/shared/assets/qmerit_logo.png",
              sizes: [96, 128, 192, 256, 384, 512, 640]
            },
            {
              src: "src/shared/assets/qmerit_logo.png",
              size: "1024x1024"
            }
          ],
          options: {
            fingerprints: false
          }
        })
      );
    }

    return appConfig;
  }
};
