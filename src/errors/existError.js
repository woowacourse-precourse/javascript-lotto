const { Console } = require("@woowacourse/mission-utils");

const existError = (errorMessage) => {
  Console.close();
  throw new Error(errorMessage);
};
module.exports = existError;
