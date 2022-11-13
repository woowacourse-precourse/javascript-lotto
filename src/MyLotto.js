const { Console, Random } = require("@woowacourse/mission-utils");

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
    if (money < 1000)
      throw new Error("[ERROR] 구매금액은 1000원 이상이어야 합니다.");
    if (money % 1000 !== 0)
      throw new Error("[ERROR] 1000원으로 나누어 떨어져야 합니다.");
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
    Console.print(`${amount}개를 구매했습니다.`);
  }

  printMyLottery(myLottos) {
    for (let i = 0; i < myLottos.length; i++) {
      Console.print(myLottos[i]);
    }
  }
}

module.exports = MyLotto;
