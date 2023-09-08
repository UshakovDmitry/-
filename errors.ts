npm install typescript --save-dev


npm install @cypress/webpack-preprocessor --save-dev



{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress"]
  },
  "include": ["cypress/**/*.ts"],
  "exclude": ["node_modules"]
}







const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'ts-loader'
              }
            ]
          }
        ]
      }
    },
    watchOptions: {}
  };

  on('file:preprocessor', webpack(options));
};

