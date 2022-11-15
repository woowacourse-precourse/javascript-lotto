const { Console } = require('@woowacourse/mission-utils');
const Message = require("./Message.js");

class Clerk {
  static getBuyLottoMoney() {
    let buyMoney = 0;
    Console.readLine(Message.INFORMATION.moneyInput, (money) => {
      buyMoney = money;
      Clerk.checkMoney(money);
    });
    return buyMoney;
  }

  static checkMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error(Message.ERROR.moneyValidWarning);
    }
  }
}

module.exports = Clerk;
