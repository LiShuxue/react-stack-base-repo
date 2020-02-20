import axios from './config';

export interface IApi {
  type: 'get' | 'post' | 'delete' | 'GET' | 'POST' | 'DELETE';
  url: string;
}

// define every api
const getApi: IApi = { type: 'get', url: '/module1/get' };
const postApi: IApi = { type: 'post', url: '/module2/post' };

// export those api as default module, because we alwasy need use those in other place
export default {
  getApi,
  postApi
};

// export those method, then we can use it in bisuness logic
export const testGetMethod = () => {
  return axios({
    method: getApi.type,
    url: getApi.url
  });
};

export const testPostMethod = (data: any) => {
  return axios({
    method: postApi.type,
    url: postApi.url,
    data
  });
};
