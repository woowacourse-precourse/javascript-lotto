const { Console } = require('@woowacourse/mission-utils');

const GameTools = require('./GameTools');
const Lotto = require('./Lotto');
const Render = require('./Render');
const Validator = require('./Validator');
const { LOTTO, MESSAGE } = require('./constants');

class App {
  constructor() {
    this.lotto = undefined;
    this.userLottos = [];
    this.stateOfPrize = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  play() {
    this.askBuget();
  }

  askBuget() {
    Console.readLine(MESSAGE.ASK_BUDGET, (money) => {
      Validator.throwErrorIfInvalidMoney(money);
      this.userLottos = GameTools.issueLottoAsManyAsCount(money / LOTTO.PRICE);

      this.renderIssuedLottoList(money / LOTTO.PRICE);
    });
  }

  renderIssuedLottoList(countOfLottos) {
    Render.issuedLottoList(countOfLottos, this.userLottos);

    this.askWinningNumbers();
  }

  askWinningNumbers() {
    Console.readLine(MESSAGE.ASK_WINNING_NUMBER, (inputValue) => {
      Validator.throwErrorIfInvalidWinningForm(inputValue);
      const winningNumbers = GameTools.stringToSortedNumberArray(inputValue);
      this.lotto = new Lotto(winningNumbers);

      this.askBonusNumber(winningNumbers);
    });
  }

  askBonusNumber(winningNumbers) {
    Console.readLine(MESSAGE.ASK_BONUS_NUMBER, (bonusNumber) => {
      Validator.throwErrorIfInvalidBonusNumber(winningNumbers, bonusNumber);

      this.printWinningStatistics(bonusNumber);
    });
  }

  printWinningStatistics(bonusNumber) {
    this.lotto.stateOfWinning(this.userLottos, bonusNumber, this.stateOfPrize);

    this.exitGame();
  }

  exitGame() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
