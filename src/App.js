const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const LottoSeller = require('./LottoSeller');
const WinningAndBonusNumbers = require('./WinningAndBonusNumbers');

class App {
  constructor() {
    this.lottoSeller = new LottoSeller();
    this.winningAndBonusNumbers = new WinningAndBonusNumbers();
  }

  play() {
    Console.readLine(Messages.INPUT_MONEY, (money) => {
      this.lottoSeller.resultsForCountAndNumbers(money);
      this.enterWinningNumber();
    });
  }

  enterWinningNumber() {
    Console.readLine(Messages.INPUT_WINNER_NUMBER, (numbers) => {
      this.winningAndBonusNumbers.sixNumbersInRange(numbers);
    });
  }
}

module.exports = App;
