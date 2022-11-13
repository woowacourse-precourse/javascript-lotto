const { Console } = require('@woowacourse/mission-utils');

const GameTools = require('./GameTools');
const Lotto = require('./Lotto');
const Render = require('./Render');
const Validator = require('./Validator');
const { LOTTO, MESSAGE } = require('./constants');
const LottoGenerator = require('./LottoGenerator');

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
      const winningNumbers = GameTools.stringToSortedNumberArray(inputValue);
      this.lotto = new Lotto(winningNumbers);

      this.askBonusNumber();
    });
  }

  askBonusNumber() {
    Console.readLine(MESSAGE.ASK_BONUS_NUMBER, (bonusNumber) => {
      Validator.throwErrorIfInvalidBonusNumber(bonusNumber);
      this.printWinningStatistics(bonusNumber);
    });
  }

  printWinningStatistics(bonusNumber) {
    this.lotto.informStateOfWinning(this.userLottos, bonusNumber);
    this.exitGame();
  }

  exitGame() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
