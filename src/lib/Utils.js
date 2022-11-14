const { Console, Random } = require('@woowacourse/mission-utils');

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
    return message.replace(/,/gi, ', ');
  },

  isLessThanNumber(count, number) {
    if (count < number) return true;
    return false;
  },
};

module.exports = utils;
