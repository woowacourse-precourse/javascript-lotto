const { Console, Random } = require('@woowacourse/mission-utils');

class Utils {
  /**
   *
   * @param {string} message
   */
  static print(message) {
    Console.print(message);
  }

  /**
   *
   * @param {string} message
   * @param {Function} callback
   */
  static readLine(message) {
    return new Promise((resolve, reject) => {
      Console.readLine(message, (answer) => {
        resolve(answer);
      });
    });
  }

  /**
   *
   * @param {number} startInclusive
   * @param {number} endInclusive
   * @param {number} count
   * @returns {number[]}
   */
  static getRandomNumbers(startInclusive, endInclusive, count) {
    return Random.pickUniqueNumbersInRange(startInclusive, endInclusive, count);
  }
}

module.exports = Utils;
