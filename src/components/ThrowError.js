const { LIBRARY_URL } = require('../constant');
const { Console } = require(LIBRARY_URL);

function ThrowError(errorMessage) {
  Console.close();
  throw new Error(errorMessage);
}

module.exports = ThrowError;
