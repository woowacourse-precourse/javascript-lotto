const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE, RANDOM_NUMBER, REGEX, ERROR } = require('./constants');

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
    if (!REGEX.PURCHASE_AMOUNT_REGEX.test(inputStr)) {
      throw new Error(ERROR.ENTER_VALID_PURCHASE_AMOUNT);
    }

    return parseInt(inputStr);
  }

  issue() {
    for (let i = 0; i < this.issuedQuantity; ++i) {
      this.lottos.push(
        Random.pickUniqueNumbersInRange(
          RANDOM_NUMBER.MIN,
          RANDOM_NUMBER.MAX,
          RANDOM_NUMBER.COUNT
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
