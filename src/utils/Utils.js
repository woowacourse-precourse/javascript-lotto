const { Console, Random } = require('@woowacourse/mission-utils');

const Utils = {
  print(input) {
    Console.print(input);
  },

  readLine(message, callback) {
    Console.readLine(message, callback);
  },

  close() {
    Console.close();
  },

  pickUniqueNumbersInRange(start, end, count) {
    return Random.pickUniqueNumbersInRange(start, end, count).sort(
      (a, b) => a - b
    );
  },
};

module.exports = Utils;
