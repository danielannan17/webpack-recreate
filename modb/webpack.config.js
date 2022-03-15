/********************************************************* {COPYRIGHT-TOP} ***
 * Licensed Materials - Property of IBM
 *
 * (C) Copyright IBM Corporation 2016, 2021
 *
 * All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 ********************************************************** {COPYRIGHT-END} **/
 const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
 const TerserPlugin = require("terser-webpack-plugin");
 
 module.exports = [
   {
     name: 'base',
     plugins: [new NodePolyfillPlugin()],
     module: {
       rules: [
         // Process JS with Babel.
         {
           test: /\.(js|jsx|mjs)$/,
           loader: require.resolve('babel-loader')
         }
       ]
     },
     optimization: {
       minimize: true,
       minimizer: [new TerserPlugin({
         extractComments: false,
       })],
       splitChunks: {
         chunks: 'all',
       }
     },
   },
   {
    name: 'simplebase',
    plugins: [new NodePolyfillPlugin()],
    module: {
      rules: [
        // Process JS with Babel.
        {
          test: /\.(js|jsx|mjs)$/,
          loader: require.resolve('babel-loader')
        }
      ]
    },
  },
   {
     name: 'prod',
     mode: 'production',
     entry: {
       worker: { import: './src/worker.js', filename: './umd/worker.min.js' },
       gen: { import: './src/index.js', filename: './umd/modb.min.js', library: {
         name: 'modB',
         type: 'umd'
       } },
     }
   }
 ];
 