const { ERROR_MSG, paymentMsg } = require("./utils/string");
const Validation = require("./utils/Validation");
const WConsole = require("./utils/WConsole");

class Payment {
  #money;
  constructor(money) {
    this.validate(money);
    this.money = money;
  }
  validate(money) {
    Validation.throwError(money % 1000 !== 0, ERROR_MSG.PAYMENT_VAL);
  }
  buyLotteryTicket() {
    let lotteryTicket = this.money / 1000;
    WConsole.print(paymentMsg(lotteryTicket));
    return lotteryTicket;
  }
}

module.exports = Payment;
