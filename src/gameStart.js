const { Random, Console } = require("@woowacourse/mission-utils");
const {
  GAME_START_MESSAGE,
  THOUSAND,
  BUY_LOTTOS_MESSAGE,
  RANGE,
} = require("./constant/inputMessage");
const Lotto = require("./Lotto");
const { winNumbers } = require("./utils/winAndBonus");
const { validatePurchaseCost } = require("./validateNumber");

class UserLottos {
  #userPrice;
  #userLottos;

  purchasedCostInput() {
    Console.readLine(GAME_START_MESSAGE, (userInput) => {
      this.#userPrice = userInput;

      if (validatePurchaseCost(this.#userPrice)) {
        this.makeLottos();
        winNumbers.inputWinNumbers(this.#userLottos);
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

  getLottos() {
    return this.#userLottos;
  }
}

const game = new UserLottos();

module.exports = {
  game,
};
