import React from 'react';
import { Button } from 'antd';
import { testGetMethod, testPostMethod } from 'src/http/api';

const Page2: React.FC = () => {
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
      <h1>page 2</h1>
      <hr />
      <Button onClick={testGetApi}>testGetApi</Button> <br />
      <Button onClick={testPostApi}>testPostApi</Button> <br />
      <h2>Open Chrome developer tool to inspect your request, and you can also see the response in the console</h2>
      <br />
      <h2>About websocket relative, wait 20s, server will push data and we will show it in console</h2>
    </div>
  );
};

export default Page2;
