const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE, LOTTO, REGEX, ERROR } = require('./constants');

class Store {
  issuedQuantity;
  lottos;

  constructor() {
    this.issuedQuantity;
    this.lottos = [];
  }

  pay() {
    Console.readLine(`${MESSAGE.ENTER_PURCHASE_AMOUNT}\n`, (inputStr) => {
      const purchaseAmount = this.validate(inputStr);
      this.issuedQuantity = purchaseAmount / 1000;
      this.issue();
      this.print();
    });
  }

  validate(inputStr) {
    if (!REGEX.PURCHASE_AMOUNT.test(inputStr)) {
      throw new Error(ERROR.ENTER_VALID_PURCHASE_AMOUNT);
    }

    return parseInt(inputStr);
  }

  issue() {
    for (let i = 0; i < this.issuedQuantity; ++i) {
      this.lottos.push(
        Random.pickUniqueNumbersInRange(
          LOTTO.NUMBER_MIN,
          LOTTO.NUMBER_MAX,
          LOTTO.NUMBER_OF_NUMBERS
        ).sort((num1, num2) => num1 - num2)
      );
    }
  }

  print() {
    Console.print(`\n${this.issuedQuantity}${MESSAGE.ISSUED_QUANTITY}`);
    this.lottos.forEach(([num1, num2, num3, num4, num5, num6]) => {
      Console.print(`[${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}]`);
    });
  }
}

module.exports = Store;
