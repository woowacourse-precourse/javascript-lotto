const { message } = require('./messages');

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
    Utils.print(message.STATISTICS);
    Utils.print(message.DIVIDER);
    Utils.print(message.FIFTH_PRIZE(statistics.fifth));
    Utils.print(message.FOURTH_PRIZE(statistics.fourth));
    Utils.print(message.THIRD_PRIZE(statistics.third));
    Utils.print(message.SECOND_PRIZE(statistics.second));
    Utils.print(message.FIRST_PRIZE(statistics.first));
    Utils.print(message.REVENUE(revenue));
  }

  /**
   *
   * @param {number[][]} userNumbersList
   */
  static printUserNumberList(userNumbersList) {
    this.printNewLine();
    Utils.print(message.USER_NUMBERS_LIST_LENGTH);

    userNumbersList.forEach((numbers) =>
      Utils.print(`[${numbers.join(', ')}]`)
    );

    this.printNewLine();
  }
}

module.exports = Printer;
