const { Console } = require('@woowacourse/mission-utils');

function ThrowError(errorMessage) {
  Console.close();
  throw new Error(errorMessage);
}

module.exports = ThrowError;
