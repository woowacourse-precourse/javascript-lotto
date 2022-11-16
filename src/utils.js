const { Random, Console } = require('@woowacourse/mission-utils');

const utils = {
  getInput(message, callback) {
    Console.readLine(message, callback);
    Console.close();
  },
  print(message) {
    Console.print(message);
  },
  getRandom(minNumber, maxNumber, count) {
    return Random.pickUniqueNumbersInRange(minNumber, maxNumber, count);
  },
};

module.exports = utils;
