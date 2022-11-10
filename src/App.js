const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const LottoSeller = require('./LottoSeller');
const WinningAndBonusNumbers = require('./WinningAndBonusNumbers');
const Validation = require('./Validation');

class App {
  constructor() {
    this.lottoSeller = new LottoSeller();
    this.winningAndBonusNumbers = new WinningAndBonusNumbers();
    this.validation = new Validation();
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
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    Console.readLine(Messages.INPUT_BONUS_NUMBER, (number) => {
      this.validation.bonusNumber(number);
    });
  }
}

new App().play();

module.exports = App;
