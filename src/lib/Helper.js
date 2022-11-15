const { Message } = require("./constants/Message");

const Helper = {
  checkValidLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Message.ERROR.LOTTO_LENGTH);
    }
  },

  checkDuplicatedNumber(numbers) {
    let newNumbers = [...new Set(numbers)];
    if (numbers.length !== newNumbers.length) {
      throw new Error(Message.ERROR.LOTTO_DUPLICATED);
    }
  },

  checkRangedNumber(numbers) {
    for (let number of numbers) {
      if (!Number(number) === true) {
        throw new Error(Message.ERROR.NUMBER_RANGE);
      }
      if (number > 45 || number < 0) {
        throw new Error(Message.ERROR.NUMBER_RANGE);
      }
    }
  },
};

module.exports = { Helper };
