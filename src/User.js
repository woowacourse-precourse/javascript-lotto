const { Console } = require("@woowacourse/mission-utils");

class User {
  #myLottos;
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  addLotto(lotto) {
    this.#myLottos.push(lotto);
  }

  validate(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 천원단위여야 합니다.");
    }
  }

  printMyLottos() {
    Console.print(this.#myLottos.length + "개를 구매했습니다.");
    this.#myLottos.map((lotto) => {
      Console.print(lotto);
    });
  }
}
