const MissionUtils = require("@woowacourse/mission-utils");

class UserMoney {
  getUserMoney() {
    let MONEY = 0;

    MissionUtils.Console.readLine(Message.INFORMATION.moneyInput, (input) => {
      this.errorHandler(input);
      MONEY = input;
    });
    
    return MONEY;
  }

  errorHandler(input) {
    if (input%1000 != 0) {
      throw new Error("[ERROR] 복권의 1장당 가격은 1000원입니다.");
    }
  }
}

module.exports = UserMoney;