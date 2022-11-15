const { Console, Random } = require('@woowacourse/mission-utils');

class Utils {
  /**
   *
   * @param {string | Array} message
   */
  static print(message) {
    Console.print(message);
  }

  /**
   *
   * @param {string} message
   * @param {Function} callback
   */
  static readLine(message, callback) {
    Console.readLine(message, callback);
  }

  static close() {
    Console.close();
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
