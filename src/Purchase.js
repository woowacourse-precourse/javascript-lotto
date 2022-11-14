const { Console } = require("@woowacourse/mission-utils");
const validate = require("./validation/validation");

class Purchase {
  constructor(input) {
    this.validate(input);
    this.quantity = input / 1000;
  }

  validate(input) {
    validate.moneyInput(input);
  }

  quantityOfPurchase() {
    Console.print(`${this.quantity}개를 구매했습니다.`);
  }
}

module.exports = Purchase;
