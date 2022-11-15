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
};

module.exports = { Helper };
