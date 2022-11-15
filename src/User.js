const { Console, Random } = require("@woowacourse/mission-utils");
const { LOTTO } = require("./utils/constant");
const { ERROR_MESSAGE } = require("./utils/UI");

class User {
  #myLottos;
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
    this.purchaseLotto(this.purchasableLotto());
  }

  purchaseLotto(number) {
    let myLottos = [];
    for (let i = 0; i < number; i++) {
      myLottos.push(
        Random.pickUniqueNumbersInRange(
          LOTTO.NUM_START,
          LOTTO.NUM_LAST,
          LOTTO.NUM_LENGTH
        ).sort((a, b) => a - b)
      );
    }
    this.#myLottos = myLottos;
  }

  purchasableLotto() {
    return this.#amount / LOTTO.PRICE;
  }

  validate(amount) {
    if (amount % LOTTO.PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.INPUT_AMOUNT);
    }
  }

  getLottos() {
    return this.#myLottos;
  }

  printLottos() {
    Console.print("\n" + this.purchasableLotto() + "개를 구매했습니다.");
    this.#myLottos.map((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }
}

module.exports = User;
