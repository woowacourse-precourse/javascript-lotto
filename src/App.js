const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const LottoSeller = require('./LottoSeller');

class App {
  constructor() {
    this.lottoSeller = new LottoSeller();
  }

  play() {
    Console.readLine(Messages.INPUT_MONEY, (money) => {
      this.lottoSeller.resultsForCountAndNumbers(money);
      this.enterNumbersInRange();
    });
  }

  enterNumbersInRange() {
    Console.readLine(Messages.INPUT_WINNER_NUMBER, (numbers) => {
      numbers;
    });
  }
}

module.exports = App;
