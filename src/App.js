const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./data/constants');
const Lotto = require('./components/Lotto');
const User = require('./components/User');
const Winning = require('./components/Winning');

class App {
  inputMoney() {
    Console.readLine(MESSAGE.MONEY_INPUT + '\n', inputMoney => {
      this.user = new User(inputMoney);
      Console.print('\n' + this.user.countBuyLimit() + MESSAGE.ALERT_PURCHASE);
      this.user.setLottos();
      this.user.printMyLottos();

      this.inputWinningNum();
    });
  }

  inputWinningNum() {
    Console.readLine('\n' + MESSAGE.NUMBER_INPUT + '\n', winningNumbers => {
      this.winning = new Winning(winningNumbers);

      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    Console.readLine('\n' + MESSAGE.BONUS_INPUT + '\n', bonusNumber => {
      this.winning.setBonusNum(bonusNumber);
    });
  }

  play() {
    this.inputMoney();
  }
}

module.exports = App;
