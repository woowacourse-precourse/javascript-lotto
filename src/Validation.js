const { ERROR } = require("./Error");
const { Console } = require("@woowacourse/mission-utils");
const { REG_EXP } = require("./RegEx");

const isCorrectLength = (numbers) => {
  if (numbers.length !== 6) {
    Console.close();
    throw new Error(ERROR.notSatisfiedQuantity);
  }
  return true;
};

const isOnlyNumber = (numbers) => {
  if (!REG_EXP.onlyNumber.test(numbers)) {
    Console.close();
    throw new Error(ERROR.notNumber);
  }
  return true;
};

const isDuplicate = (numbers) => {
  if (new Set(numbers).size !== numbers.length) {
    Console.close();
    throw new Error(ERROR.duplicateNumber);
  }
};

const isOverFlow = (numbers) => {
  numbers.forEach((number) => {
    if (Number(number) > 45 || Number(number) < 1) {
      Console.close();
      throw new Error(ERROR.overflowNumber);
    }
  });
  return true;
};

const isAvailableMoney = (money) => {
  if (Number(money) % 1000 !== 0) {
    Console.close();
    throw new Error(ERROR.cannotDivide);
  }
  return true;
};
module.exports = {
  isCorrectLength,
  isDuplicate,
  isOnlyNumber,
  isOverFlow,
  isAvailableMoney,
};
