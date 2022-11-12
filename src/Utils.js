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

  /**
   *
   * @param {string} str
   * @param {string} separator
   * @returns {number[]}
   */
  static separateNumbers(str, separator) {
    return str.split(separator).map((number) => Number(number));
  }
}

module.exports = Utils;
