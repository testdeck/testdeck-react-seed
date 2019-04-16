## testdeck-react-seed

[![Build Status](https://travis-ci.org/testdeck/testdeck-react-seed.svg?branch=master)](https://travis-ci.org/testdeck/testdeck-react-seed)

A seed for you to get started with `@testdeck/jest` and React and Babel.

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It also makes use of [react-app-rewired](https://github.com/timarney/react-app-rewired) and 
[customize-cra](https://github.com/arackaf/customize-cra) to enable decorators.



To run all tests 

```
npm test
```


## How to set this up yourself

To set this up, the following steps have been taken.

```
nvm install v8.15.1
npx create-react-app myapp

cd myapp
npm install --save-dev react-app-rewired customize-cra @babel/plugin-proposal-decorators @testdeck/jest
```

Next, create a [config-overrides.js](./config-overrides.js), and a [.babelrc](./.babelrc) and you are done
with the basics.

Now, augment [src/App.test.js](./src/App.test.js) to make use of `@testdeck/jest` and everything should work.

