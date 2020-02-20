import socketioClient from 'socket.io-client';

const url: string = process.env.REACT_APP_API_URL || '';
const socket = socketioClient(url);

const start = () => {
  socket.on('connect', () => {
    console.log('client connect to socket server');
  });

  socket.on('message', (data: any) => {
    console.log('receive data from server');
    console.log(data);
    // to do, need storage this data to the redux store
  });

  socket.on('disconnect', () => {
    console.log('client disconnect with server');
  });
};

export default {
  start
};
