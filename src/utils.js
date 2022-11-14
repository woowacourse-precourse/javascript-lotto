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
    const result = [];
    while (result.length < count) {
      const pickedNumber = Random.pickNumberInRange(minNumber, maxNumber);
      if (!result.includes(pickedNumber)) result.push(pickedNumber);
    }
    return result;
  },
};

module.exports = utils;
