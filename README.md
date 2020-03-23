# react-stack-base-repo

This project integrate all the latest tech stack, base on React, you can use it as your new project template, it is out of box, and we will also continue maintain and keep moving.

## How to use ?

### 1. `yarn`

Install the dependency

### 2. `yarn start`

Running the app, then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. `yarn build`

Build the app for production to the `build` folder.

### 4. `yarn test-all`

Run all the unit test, and output the test coverage report.

## What we have ?

### 1. [React](https://reactjs.org/)

`React` is an awesome UI library, we are using it as our base framework.

The whole application rendered in `#root` element.

```
ReactDOM.render(
  <App />
  document.getElementById('root')
);
```

### 2. [TypeScript](https://www.typescriptlang.org/)

We using `typescript` as our static syntax check tool, It will reduce our bug no matter development or production.

By default, we already import a lot of popular typescript declaration file, you can find in `node_modules/@types`, and we also have `react-app-env.d.ts` to define something. If you need and you can also define yourself in this file.

### 3. [React Router](https://reacttraining.com/react-router)

Like all the popular SPA project, we always need router system to handle route and page redirect.

now we are using latest `react-router` v5.

```tsx
// src/App.tsx

...

<BrowserRouter>
  <Switch>
    <Route exact path="/page1">
      <Page1 />
    </Route>
    <Route exact path="/page2">
      <Page2 />
    </Route>
    <Route exact path="/page3">
      <Page3 />
    </Route>
    <Redirect to="/page1" />
  </Switch>
</BrowserRouter>

...
```

### 4. [Redux](https://redux.js.org/) / [React-Redux](https://react-redux.js.org/) / [redux-thunk](https://github.com/reduxjs/redux-thunk)

Also we using `redux` to manage the state change. using the `react-redux` to integrate redux to react project.

We already defined the folder structure and some sample code about how to use it in this project.

- ### store

  we have a `store` folder to put the redux relative code, `store/index.ts` defined the whole application store. you can add more state in this file.

  ```js
  const preloadState = {
    stateA: 'this is preload stateA',
    stateB: 'this is preload stateB'
  };

  const store = createStore(reducer, preloadState, applyMiddleware(thunk));
  ```

- ### actions

  you should put any action creator to `store/actions` folder, and export it in `actions/index.ts`

  ```js
  export const actionCreatorA = (actionDetail: string): InterfaceActionA => {
    return {
      type: types.ACTION_TYPE_A,
      text: actionDetail
    };
  };
  ```

  We have a single file to define all the action type `store/actionTypes.ts`

  ```js
  export const ACTION_TYPE_A: string = 'ACTION_TYPE_A';
  export const REQUEST_SUCCESS: string = 'REQUEST_SUCCESS';
  export const REQUEST_FAILED: string = 'REQUEST_FAILED';
  ```

  You can also define async action, because we already integrate the `redux-thunk` library

  ```js
  import { testGetMethod } from 'src/http/api';

  const requestSuccess = () => {
    return {
      type: types.REQUEST_SUCCESS,
      text: 'request success'
    };
  };
  const requestFailed = () => {
    return {
      type: types.REQUEST_FAILED,
      text: 'request failed'
    };
  };

  export const asyncActionCreatorB = () => {
    return async (dispatch: Dispatch, getState: Function) => {
      console.log(getState());
      try {
        await testGetMethod();
        dispatch(requestSuccess());
      } catch (error) {
        dispatch(requestFailed());
      }
    };
  };
  ```

- ### reducers

  you should put any reducer to `store/reducers` folder, and combine to one root reducer in `reducers/index.ts`

  ```js
  export const reducerA = (state: string = 'this is init A', action: InterfaceActionA) => {
    switch (action.type) {
      case types.ACTION_TYPE_A:
        return action.text;
      default:
        return state;
    }
  };
  ```

- ### useSelector
  We using this hook to get state, which provide by latest `react-reux`
  ```js
  const stateA = useSelector((state: any) => state.stateA);
  const stateB = useSelector((state: any) => state.stateB);
  ```
- ### useDispatch
  We using this hook to dispatch action, which provide by latest `react-reux`
  ```js
  const dispatch = useDispatch();
  dispatch(actionCreatorA('changed'));
  ```

### 5. [webpack](https://webpack.github.io/)

This project create by "create-react-app", we already eject the default config, and we also config some useful thing to let development more smooth and production performance more better. and you can also config yourself thing in `config/webpack.config.js` and `config/webpackDevServer.config.js`

### 6. [Less](http://lesscss.org/)

We are using `less` as our pre-compile css tool, you can define `xxx.less` file and import in your `jsx/tsx` file, and you can also define the `xxx.module.less` file, this will auto as the css module, after render, the class name will auto be added the prefix.

### 7. [Ant-Design](https://ant.design)

We using the popular `ant-design` as our UI component library, you can use any component which ant-design provide directly.

```js
import { Button } from 'antd';
```

### 8. [Ag-Grid](https://www.ag-grid.com/)

`Ag-Grid` is the best JavaScript Grid in the world, high perfomance and high customlize.

### 9. [ESLint](https://eslint.org/)

We using `ESLint` to check our `.js/.ts/.jsx/.tsx` code, you can config yourself ruls in `.eslintrc.js`

- ### yarn lint-js
  you can run `yarn lint-js` to lint all `.js/.ts/.jsx/.tsx` code
- ### yarn lint-js-fix
  you can run `yarn lint-js-fix` to auto fix some code
- ### yarn lint & yarn lint-fix
  you can run `yarn lint` to lint both js and css, run `yarn lint-fix` to fix both.

### 10. [Stylelint](https://stylelint.io/)

We using `Stylelint` to lint all `.less/.css` file, you can also config yourself rule in `.stylelintrc.json`

- ### yarn lint-css
  you can run `yarn lint-css` to lint all `.less/.css` code
- ### yarn lint-css-fix
  you can run `yarn lint-css-fix` to auto fix some code
- ### yarn lint & yarn lint-fix
  you can run `yarn lint` to lint both js and css, run `yarn lint-fix` to fix both.

### 11. [Prettier](https://prettier.io/)

`Prettier` is a code format tool, we defined some default code format standard in `.prettierrc`, you can check with your team and change to more suitable. You can also use vscode and config auto format when save, it will more helpful for your development.

### 12. [Husky](https://github.com/typicode/husky#readme)

`Husky` is a git hook, it allow you do something before code commit or code push.

We configed it to lint code before code push to repo, if eslint or stylelint find some code error, you will push failed. This is helpful for the team to manage code quality.

### 13. [Jest](https://jestjs.io/) / [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)

We using `Jest` to as our base testing framework and `react-testing-library` to test react components.

All the test file be writed in `tests` folder, you should put your test file in there, and follow the src folder stucture.

- ### yarn test
  you can run `yarn test` to start run test with watch mode, and this will only run the new adding unit test.
- ### yarn test-all
  you can run `yarn test-all` to run all the unit test, and output the test coverage report.

### 14. [axios](https://github.com/axios/axios)

We using axios to make http call, in `http/config.ts` file, we already have some default config, you can also add your own config in it.

You should define all the service url in `http/api.ts`, and export the method which you can use in the page.

We support both mock and real service in same time, you can config which service call need send to mock server and which send to real server, in `http/mockServiceConfig.ts`, and also config the real and mock baseurl in `.env.development` or `.env.production`

### 15. mock server

We create the mock server for your development, it can serve the mock data, also can serve your build file if you want.

Create by [koa2](https://github.com/koajs/koa#readme).

- ### start server

  Run `yarn mock` to start mock server only, it will start with nodeman, wich mean it will auto restart if you change some code or mock data.

  By default, if you start whole application with run `yarn start`, the mock server will also start automaticly.

- ### mock data

  You can create the folder for your module, and put all those moudle relative mock data into it, then define the url and export it in the `module/index.js`, finally, import this module in `mockdata/index.js`. now your mock data will working.

  By default, mock server will start in `localhost:4000`

- ### serve build file
  Build the application and put the build folder under server folder, open `localhost:4000` in browser, you will see your application.

### 16. [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) / [socket.io](https://socket.io/docs/)

We also integrate the websocket tech stack, because sometime we may not only client to call server, but also need server push data to client.

We are using socket.io as websocket library. in `server/server.js`, there have some code do the server push.  
There also have a socket client define in `http/socket-client.ts`, to receive the data which server pushed.

### 17. `.env.development` & `.env.production`

We have those two env file to define some variable, it will auto inject to process.env, you can use like `process.env.REACT_APP_API_URL`.  
Please note, the variable should start with `REACT_APP_`

### 18. src / components alias

We configed the alias for src & component path, so you no need write a lot of relative path like `../../`

```js
// before
import xxx from '../../../../abc/edf.ts';
import xxx from '../../../../component/xxx.ts';
// now
import xxx from 'src/abc/edf.ts';
import xxx from 'component/xxx.ts';
```

### 19. switch theme

By default, we support two theme, dark & light, you can dynamic change theme without reload page. the component is `components/switchTheme/index.ts`.

- ### styles/common/color.less

  You can define the base color in this file, You should never change those base color !!! You can add new one, but never try to change those exsiting.

  You should never use those base color in your UI components or UI page. You should use those color only in theme file, dark.less or light.less.

- ### styles/override/override-antd.less

  For implement customelize the theme, we need override the ant-design components theme. This file is for override ant-design default theme.You can override those default less variable: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

  More detail about customize theme, please see: https://ant.design/docs/react/customize-theme

- ### styles/theme/dark.less & styles/theme/light.less

  You should define different theme color variable in both dark and light theme file, use same key, but different value.

  For some ant-design components style, if the override-antd.less can't cover, you can override the class in those theme file.
