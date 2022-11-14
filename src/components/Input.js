const MissionUtils = require("@woowacourse/mission-utils");
const Check = require('./Check.js');

class Input {
  inputAmountMoney () {
    const check = new Check();
    let lottomoney;
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', money => {
      if (check.checkDivideMoney(money)) {
        lottomoney = money;
      }
    });
    return lottomoney;
  }

  inputMoneyCount () {
    const count = this.inputAmountMoney() / 1000;
    return count;
  }

  inputWinNumber () {
    const check = new Check();
    let winNumber;
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', number => {
      if (check.checkWinNumVaildation(number)) {
        winNumber = number;
      }
    })
    return winNumber;
  }

  inputBonusNumber () {
    let bonusNumber;
    const check = new Check();
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', number => {
      if (check.checkBonusVaildation(number)) {
        bonusNumber = number;
      }
    })
    MissionUtils.Console.close();
    return bonusNumber;
  }
}

module.exports = Input;