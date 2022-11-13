const { Random } = require("@woowacourse/mission-utils");

const {
  isDivisible,
  ascendingSort,
  countAvailableQuantity,
} = require("./utils/utils");
const {
  MIN_NUMBER,
  MAX_NUMBER,
  NUMBER_COUNT,
  ERROR,
} = require("./utils/constants");
const Lotto = require("./Lotto");

class User {
  purchaseAmount;
  quantity;
  lottos;

  constructor(purchaseAmount) {
    this.validate(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
    this.quantity = countAvailableQuantity(purchaseAmount);
    this.lottos = User.generateLottoNumbers(this.quantity);
  }

  validate(input) {
    if (!isDivisible(input)) {
      throw new Error(ERROR.INDIVISIBLE);
    }
  }

  static generateLottoNumbers(quantity) {
    const lottos = [];
    for (let i = 0; i < quantity; i++) {
      const lotto = Random.pickUniqueNumbersInRange(
        MIN_NUMBER,
        MAX_NUMBER,
        NUMBER_COUNT
      );
      lottos.push(new Lotto(ascendingSort(lotto)));
    }
    return lottos;
  }
}

module.exports = User;
