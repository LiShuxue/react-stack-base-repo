import axios from 'src/http/config';
import { testGetMethod, testPostMethod } from 'src/http/api';

jest.mock('src/http/config');

test('should call "testGetMethod" success', async () => {
  const result = {
    success: 'your request successful! -- module1 -- test1'
  };
  axios.mockResolvedValue(result);
  const data = await testGetMethod();
  expect(data).toEqual(result);
});

test('should call "testPostMethod" success', async () => {
  const result = {
    success: 'your request successful! -- module2 -- test1'
  };
  const body = {
    test: 'test'
  };
  axios.mockResolvedValue(result);
  const data = await testPostMethod(body);
  expect(data).toEqual(result);
});
