const { Message } = require("./constants/Message");

const Helper = {
  checkValidLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Message.ERROR.LOTTO_LENGTH);
    }
  },
};

module.exports = { Helper };
