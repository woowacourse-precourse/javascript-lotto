const { Random, Console } = require("@woowacourse/mission-utils");

const { isDivisible, ascendingSort } = require("./utils/utils");
const {
  MIN_NUMBER,
  MAX_NUMBER,
  NUMBER_COUNT,
  AMOUNT_UNIT,
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
    this.quantity = User.countAvailableQuantity(purchaseAmount);
    this.lottos = User.generateLottoNumbers(this.quantity);
  }

  validate(input) {
    if (!isDivisible(input)) {
      throw new Error(ERROR.INDIVISIBLE);
    }
  }

  //구매 금액으로 로또 몇장 살 수 있는지 계산하기
  static countAvailableQuantity(amount) {
    return Number(amount) / AMOUNT_UNIT;
  }

  //랜덤 번호 뽑아주기
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
