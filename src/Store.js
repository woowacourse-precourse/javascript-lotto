const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE, LOTTO, REGEX, ERROR } = require('./constants');
const Result = require('./Result');

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
      this.issuedQuantity = purchaseAmount / LOTTO.PRICE;
      this.issue();
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
    this.print();
  }

  print() {
    Console.print(`\n${this.issuedQuantity}${MESSAGE.ISSUED_QUANTITY}`);
    this.lottos.forEach(([num1, num2, num3, num4, num5, num6]) => {
      Console.print(`[${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}]`);
    });
    const result = new Result(this.lottos);
    result.drawWinningNumber();
  }
}

module.exports = Store;
