const { Console, Random } = require('@woowacourse/mission-utils');
const { RESET_ADD_BLANK } = require('./Constants');

const utils = {
  print(message) {
    return Console.print(message);
  },

  readLine(query, callback) {
    return Console.readLine(query, callback);
  },

  close() {
    return Console.close();
  },

  pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    return Random.pickUniqueNumbersInRange(startInclusive, endInclusive, count);
  },

  getArrayToCustomMessage(myArray = []) {
    const message = JSON.stringify(myArray);
    return message.replace(/,/gi, RESET_ADD_BLANK);
  },

  isLessThanNumber(count, number) {
    if (count < number) return true;
    return false;
  },

  getRate(prize, price) {
    return (prize / price) * 100;
  },

  getRoundSecondDecimalPlace(number) {
    return Math.round(number * 100) / 100;
  },
};

module.exports = utils;
