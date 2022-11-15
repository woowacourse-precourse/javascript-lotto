const { Console } = require('@woowacourse/mission-utils');

const exitWithError = (errorMsg) => {
  Console.close();

  throw new Error(errorMsg);
};

module.exports = exitWithError;
