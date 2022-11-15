const { Console } = require("@woowacourse/mission-utils");

const getUserInputAsync = (instruction, next) => {
  Console.readLine(instruction, (input) => {
    next(input);
  });
};

module.exports = getUserInputAsync;
