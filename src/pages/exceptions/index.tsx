import React from 'react';
import { testGetMethod, testPostMethod } from 'src/http/api';

const Exceptions: React.FunctionComponent = () => {
  const testGetApi = () => {
    testGetMethod().then(response => {
      console.log(response);
    });
  };
  const testPostApi = () => {
    testPostMethod({
      test: 'test'
    }).then(response => {
      console.log(response);
    });
  };
  return (
    <div>
      <h1>Exceptions</h1>
      <hr />
      <button onClick={testGetApi}>testGetApi</button> <br />
      <button onClick={testPostApi}>testPostApi</button> <br />
      <h2>Open Chrome developer tool to inspect your request, and you can also see the response in the console</h2>
      <br />
      <h2>About websocket relative, wait 20s, server will push data and we will show it in console</h2>
    </div>
  );
};

export default Exceptions;
