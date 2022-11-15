const { INPUT_MESSAGE } = require('./constant');
const MissionUtils = require('@woowacourse/mission-utils');
const LottoGenerator = require('./IssueLotto');
const LottoEarnings = require('./Calculator');
const InputCheck = require('./InputCheck');
const Lotto = require('./Lotto');
const Match = require('./Matcher');
const Result = require('./Result');

const Console = MissionUtils.Console;

class App {
  play() {
    this.injectMoney();
  }

  injectMoney() {
    Console.readLine(INPUT_MESSAGE.ENTER_MONEY, money => {
      InputCheck.moneyValidate(Number(money));
      LottoGenerator.getPurchaseLottoCount(Number(money));
      LottoEarnings.money += Number(money);
      this.enterWinningNumber();
    });
  }

  enterWinningNumber() {
    Console.readLine(INPUT_MESSAGE.ENTER_WINNING_NUMBER, input => {
      const inputWinningNumber = input.split(',').map(num => Number(num));
      const lotto = new Lotto(inputWinningNumber);
      lotto.validate(inputWinningNumber);
      Match.winningNumber = inputWinningNumber;
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    Console.readLine(INPUT_MESSAGE.ENTER_BONUS_NUMBER, input => {
      const inputBonusNumber = Number(input);
      InputCheck.bonusValidate(inputBonusNumber);
      Match.bonusNumber += inputBonusNumber;
      this.winningStatistics();
    });
  }

  winningStatistics() {
    Match.matchLottoNumber();
    const earnings = LottoEarnings.getEarnings();
    Result.printResult(earnings);
  }
}

const app = new App();
app.play();

module.exports = App;
