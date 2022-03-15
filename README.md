# webpack-recreate

Recreates a bug for webpack 5 https://github.com/webpack/webpack/issues/15485

#### Steps to reproduce:
  ```
  cd modb
  npm i
  npm run build-optimised
  cd ../moda
  npm i
  npm link ../modb
  npm run dev
```
Open the browser with the given url - usually localhost:8080

#### Expected behaviour:
In the browser console logs "Got Message" should appear

#### Current behaviour:
The message does not appear

#### When you remove the optimisation it works just fine:
```
cd modb
npm i
npm run build-simple
cd ../moda
npm i
npm link ../modb
npm run dev
```
