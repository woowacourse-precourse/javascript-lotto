const { Console } = require('@woowacourse/mission-utils');

const throwException = (errorMessage) => {
  throw new Error(errorMessage);
  Console.close();
};

module.exports = {
  throwException,
};
