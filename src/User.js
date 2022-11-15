const { Console, Random } = require("@woowacourse/mission-utils");
const LOTTO_PRICE = 1000;
const LOTTO_NUM_START = 1;
const LOTTO_NUM_LAST = 45;
const LOTTO_NUM_LENGTH = 6;

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
          LOTTO_NUM_START,
          LOTTO_NUM_LAST,
          LOTTO_NUM_LENGTH
        ).sort((a, b) => a - b)
      );
    }
    this.#myLottos = myLottos;
  }

  purchasableLotto() {
    return this.#amount / LOTTO_PRICE;
  }

  validate(amount) {
    if (amount % LOTTO_PRICE !== 0) {
      throw new Error(`[ERROR] 구입 금액은 ${LOTTO_PRICE}원 단위여야 합니다.`);
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
