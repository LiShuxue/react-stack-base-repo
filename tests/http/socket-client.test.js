import socketClient from 'src/http/socket-client';
import socketioClient from 'socket.io-client';

jest.mock('socket.io-client');

let socket;
beforeAll(() => {
  socket = socketioClient();
  socketClient.start();
});

test('should call "socketioClient" to generate socket instance', () => {
  expect(socketioClient.mock.calls.length).toEqual(2);
});

test('socket instance should total listen event 3 times', () => {
  expect(socket.on.mock.calls.length).toEqual(3);
});

test('socket instance should listen "connect" event', () => {
  const args = socket.on.mock.calls;
  let isCallConnect = false;
  let callback;
  args.forEach(item => {
    if (item.includes('connect')) {
      isCallConnect = true;
      callback = item[1];
    }
  });
  expect(isCallConnect).toEqual(true);
  expect(callback).not.toBeUndefined();
  callback();
});

test('socket instance should listen "disconnect" event', () => {
  const args = socket.on.mock.calls;
  let isCallDisconnect = false;
  let callback;
  args.forEach(item => {
    if (item.includes('disconnect')) {
      isCallDisconnect = true;
      callback = item[1];
    }
  });
  expect(isCallDisconnect).toEqual(true);
  expect(callback).not.toBeUndefined();
  callback();
});

test('socket instance should listen "message" event', () => {
  const args = socket.on.mock.calls;
  let isCallMessage = false;
  let callback;
  args.forEach(item => {
    if (item.includes('message')) {
      isCallMessage = true;
      callback = item[1];
    }
  });
  expect(isCallMessage).toEqual(true);
  expect(callback).not.toBeUndefined();
  callback();
});
