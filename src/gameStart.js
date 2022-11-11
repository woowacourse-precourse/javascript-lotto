const { Random, Console } = require("@woowacourse/mission-utils");
const {
  GAME_START_MESSAGE,
  THOUSAND,
  BUY_LOTTOS_MESSAGE,
  RANGE,
} = require("./constant/inputMessage");
const Lotto = require("./Lotto");
const { validateInputNumber } = require("./validateNumber");

class UserLottos {
  #userPrice;
  #userLottos;

  constructor(userInput) {
    this.#userPrice = userInput;
  }

  purchasedCostInput() {
    Console.readLine(GAME_START_MESSAGE, (userInput) => {
      this.#userPrice = userInput;

      if (validateInputNumber(this.#userPrice)) {
        this.makeLottos();
      }
    });
  }

  makeLottos() {
    const count = this.#userPrice / THOUSAND;

    Console.print(BUY_LOTTOS_MESSAGE(count));

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        RANGE.START,
        RANGE.END,
        RANGE.COUNT
      );
      const lotto = new Lotto(numbers);
      this.saveLottos(lotto.getLotto);
    }
  }

  saveLottos(numbers) {
    if (!this.#userLottos) {
      this.#userLottos = [];
      return this.#userLottos.push(numbers);
    }

    return this.#userLottos.push(numbers);
  }
}

const game = new UserLottos();

module.exports = {
  game,
};
