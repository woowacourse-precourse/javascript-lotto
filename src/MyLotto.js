const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constant/Message");

class MyLotto {
  #money;
  #purchaseAmount;

  constructor(money) {
    this.validatePurchaseAmount(money);
    this.#money = money;
    this.#purchaseAmount = money / 1000;
    this.printPurchaseAmount(this.#purchaseAmount);
  }

  validatePurchaseAmount(money) {
    if (money < 1000) throw new Error(MESSAGE.ERROR_AMOUNT);
    if (money % 1000 !== 0) throw new Error(MESSAGE.ERROR_DIVIDE);
  }

  getMyLottery() {
    const myLottos = new Array(this.#purchaseAmount);
    for (let i = 0; i < this.#purchaseAmount; i++) {
      myLottos[i] = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
    }
    return myLottos;
  }

  printPurchaseAmount(amount) {
    Console.print(`${amount}${MESSAGE.PRINT_AMOUNT}`);
  }

  printMyLottery(myLottos) {
    for (let i = 0; i < myLottos.length; i++) {
      Console.print(myLottos[i]);
    }
  }
}

module.exports = MyLotto;
