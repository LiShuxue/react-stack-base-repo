const Mock = require('mockjs');

module.exports = () => {
  return Mock.mock({
    socket: [
      {
        msg: 'This is socket data',
        'id|15': /[a-z0-9]/
      }
    ]
  });
};
