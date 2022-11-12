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
    Console.print(MESSAGE.ASK_BUDGET);
    Console.readLine('', (money) => {
      Validator.throwErrorIfInvalidMoney(money);
      const countOfLottos = money / LOTTO.PRICE;

      this.issueLotto(countOfLottos);
    });
  }

  issueLotto(countOfLottos) {
    this.userLottos = GameTools.issueLottoAsManyAsCount(countOfLottos);

    this.renderIssuedLottoList(countOfLottos);
  }

  renderIssuedLottoList(countOfLottos) {
    Render.issuedLottoList(countOfLottos, this.userLottos);

    this.askWinningNumbers();
  }

  askWinningNumbers() {
    Console.print(MESSAGE.ASK_WINNING_NUM);
    Console.readLine('', (inputValue) => {
      Validator.throwErrorIfInvalidWinningForm(inputValue);
      const winningNumbers = inputValue.split(',').map((num) => Number(num));
      this.lotto = new Lotto(winningNumbers);

      this.askBonusNumber(winningNumbers);
    });
  }

  askBonusNumber(winningNumbers) {
    Console.print(MESSAGE.ASK_BONUS_NUMBER);
    Console.readLine('', (bonusNumber) => {
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
