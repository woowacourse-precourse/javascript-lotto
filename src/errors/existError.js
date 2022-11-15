const { Console } = require("@woowacourse/mission-utils");

const existError = (errorMsg) => {
  Console.close();

  throw new Error(errorMsg);
};

module.exports = existError;
