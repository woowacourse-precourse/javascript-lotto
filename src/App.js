const { Console } = require('@woowacourse/mission-utils');

const GameTools = require('./GameTools');
const Lotto = require('./Lotto');
const Render = require('./Render');
const Validator = require('./Validator');
const { LOTTO, MESSAGE } = require('./constants');

class App {
  constructor() {
    this.lotto;
    this.userLottos;
    this.winningState = {
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
      const lottoCount = money / LOTTO.PRICE;

      this.issueLotto(lottoCount);
    });
  }

  issueLotto(lottoCount) {
    this.userLottos = GameTools.issueLottoAsManyAsCount(lottoCount);

    this.renderIssuedLottoList(lottoCount);
  }

  renderIssuedLottoList(lottoCount) {
    Render.issuedLottoList(lottoCount, this.userLottos);

    this.askWinningNumbers();
  }

  askWinningNumbers() {
    Console.print(MESSAGE.ASK_WINNING_NUM);
    Console.readLine('', (inputValue) => {
      Validator.throwErrorIfInvalidFormOfWinningNumber(inputValue);
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
    this.lotto.checkStateOfPrize(
      this.userLottos,
      bonusNumber,
      this.winningState
    );

    this.exitGame();
  }

  exitGame() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
