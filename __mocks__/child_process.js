const child_process = {};

child_process.spawn = jest.fn(() => {
  return {
    on: jest.fn()
  };
});

module.exports = child_process;
