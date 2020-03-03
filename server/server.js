const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const http = require('http');
const cors = require('koa2-cors');
const socketio = require('socket.io');
const koaStatic = require('koa-static');

// require all the mock data
const router = require('./mockdata/index');
const tradedata = require('./mockdata/socket/trade');

// Koa part, use koa to start the mock server
const app = new Koa();
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowHeaders: ['Content-Type']
  })
);
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

// serve build file
app.use(
  koaStatic(__dirname + '/build', {
    maxage: 1000 * 60 * 60 * 24 * 7
  })
);

// Koa integrate with socket.io, so this mock server will have websocket function
const server = http.createServer(app.callback());
const socketServer = socketio(server);

// listen the socket client connect
socketServer.on('connection', client => {
  console.log('a socket client connect success');

  // push data to client, every 60s
  setInterval(() => {
    let trade = tradedata();
    client.emit('message', trade);
  }, 20 * 1000);

  // listen the client disconnect
  client.on('disconnect', () => {
    console.log('a socket client disconnect');
  });
});

// start the mock server
server.listen(4000, '0.0.0.0', () => {
  console.log('mock server starting...');
});
