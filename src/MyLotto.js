const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE, CONSTANTS } = require("../constant/Message");

class MyLotto {
  #money;
  #purchaseAmount;

  constructor(money) {
    this.validatePurchaseAmount(money);
    this.#money = money;
    this.#purchaseAmount = money / CONSTANTS.ONE_THOUSAND;
    this.printPurchaseAmount(this.#purchaseAmount);
  }

  validatePurchaseAmount(money) {
    if (money < CONSTANTS.ONE_THOUSAND) throw new Error(MESSAGE.ERROR_AMOUNT);
    if (money % CONSTANTS.ONE_THOUSAND !== CONSTANTS.ZERO)
      throw new Error(MESSAGE.ERROR_DIVIDE);
  }

  getMyLottery() {
    const myLottos = new Array(this.#purchaseAmount);
    for (let index = CONSTANTS.ZERO; index < this.#purchaseAmount; index++) {
      myLottos[index] = Random.pickUniqueNumbersInRange(
        CONSTANTS.MIN_LOTTO,
        CONSTANTS.MAX_LOTTO,
        CONSTANTS.LOTTO_MAX_COUNT
      ).sort((a, b) => a - b);
    }
    return myLottos;
  }

  printPurchaseAmount(amount) {
    Console.print(`${amount}${MESSAGE.PRINT_AMOUNT}`);
  }

  printMyLottery(myLottos) {
    myLottos.forEach((lotto) => Console.print(`[${lotto.join(", ")}]`));
  }
}

module.exports = MyLotto;
