const { Console } = require('@woowacourse/mission-utils');
const Message = require("./Message.js");

class Clerk {
  getBuyLottoMoney() {
    let buyMoney = 0;
    Console.readLine(Message.INFORMATION.moneyInput, (money) => {
      buyMoney = money;
      this.checkMoney(money);
    });
    return buyMoney;
  }

  checkMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error(Message.ERROR.moneyValidWarning);
    }
  }
}

module.exports = Clerk;
