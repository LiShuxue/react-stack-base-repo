const socketioClientInstance = {
  on: jest.fn(() => {})
};

const socketioClient = jest.fn(() => {
  return socketioClientInstance;
});

export default socketioClient;
