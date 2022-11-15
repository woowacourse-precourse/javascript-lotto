const { MESSAGE } = require('./messages');
const Utils = require('./Utils');

class Printer {
  static printNewLine() {
    Utils.print('');
  }

  /**
   *
   * @param {{first: number, second: number, third:number, fourth:number, fifth:number}} statistics
   * @param {string} revenue
   */
  static printStatistics(statistics, revenue) {
    this.printNewLine();
    Utils.print(MESSAGE.STATISTICS);
    Utils.print(MESSAGE.DIVIDER);
    Utils.print(MESSAGE.FIFTH_PRIZE(statistics.fifth));
    Utils.print(MESSAGE.FOURTH_PRIZE(statistics.fourth));
    Utils.print(MESSAGE.THIRD_PRIZE(statistics.third));
    Utils.print(MESSAGE.SECOND_PRIZE(statistics.second));
    Utils.print(MESSAGE.FIRST_PRIZE(statistics.first));
    Utils.print(MESSAGE.REVENUE(revenue));
  }

  /**
   *
   * @param {number[][]} userNumbersList
   */
  static printUserNumberList(userNumbersList) {
    this.printNewLine();
    Utils.print(MESSAGE.USER_NUMBERS_LIST_LENGTH(userNumbersList.length));

    userNumbersList.forEach((numbers) =>
      Utils.print(`[${numbers.join(', ')}]`)
    );

    this.printNewLine();
  }
}

module.exports = Printer;
