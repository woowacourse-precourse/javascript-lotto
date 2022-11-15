const { LIBRARY_URL } = require('../constant');
const { Console } = require(LIBRARY_URL);

const throwError = function (errorMessage) {
  Console.close();
  throw new Error(errorMessage);
};

module.exports = throwError;
