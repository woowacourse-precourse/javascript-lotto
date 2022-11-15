const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');
const Render = require('./Render');
const Validator = require('./Validator');
const { LOTTO, MESSAGE } = require('./constants');
const LottoGenerator = require('./LottoGenerator');
const { stringToNumberArray } = require('./utils');

class App {
  lotto;
  userLottos;

  play() {
    this.askBuget();
  }

  askBuget() {
    Console.readLine(MESSAGE.ASK_BUDGET, (money) => {
      Validator.throwErrorIfInvalidMoney(money);
      const countOfLottos = money / LOTTO.PRICE;
      this.userLottos = LottoGenerator.issueLottoAsManyAsCount(countOfLottos);

      this.renderIssuedLottoList(countOfLottos);
    });
  }

  renderIssuedLottoList(countOfLottos) {
    Render.issuedLottoList(countOfLottos, this.userLottos);
    this.askWinningNumbers();
  }

  askWinningNumbers() {
    Console.readLine(MESSAGE.ASK_WINNING_NUMBER, (inputValue) => {
      Validator.throwErrorIfInvalidWinningForm(inputValue);
      const winningNumbers = stringToNumberArray(inputValue);
      this.lotto = new Lotto(winningNumbers);

      this.askBonusNumber(winningNumbers);
    });
  }

  askBonusNumber(winningNumbers) {
    Console.readLine(MESSAGE.ASK_BONUS_NUMBER, (bonusNumber) => {
      Validator.throwErrorIfInvalidBonusNumber(bonusNumber, winningNumbers);
      this.printWinningStatistics(Number(bonusNumber));
    });
  }

  printWinningStatistics(bonusNumber) {
    const gameResult = this.lotto.getGameResult(this.userLottos, bonusNumber);
    Render.WinningStatistics(gameResult);

    this.exitGame();
  }

  exitGame() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
