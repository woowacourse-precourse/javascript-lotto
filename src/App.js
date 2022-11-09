const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./data/constants');
const Lotto = require('./Lotto');
const User = require('./components/User');
const Winning = require('./components/Winning');

class App {
  inputMoney() {
    Console.readLine(MESSAGE.MONEY_INPUT + '\n', inputMoney => {
      this.user = new User(inputMoney);
      Console.print(
        '\n' + this.user.countAvailableLotto() + MESSAGE.ALERT_PURCHASE,
      );
      this.user.lottoPurchase();
      this.user.printMyLottos();

      this.inputWinningNumbers();
    });
  }

  inputWinningNumbers() {
    Console.readLine('\n' + MESSAGE.NUMBER_INPUT + '\n', winningNumbers => {
      this.winning = new Winning(winningNumbers);

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine('\n' + MESSAGE.BONUS_INPUT + '\n', bonusNumber => {
      this.winning.inputBonus(bonusNumber);
    });
  }

  play() {
    this.inputMoney();
  }
}

module.exports = App;
