const { Random } = require("@woowacourse/mission-utils");

const { isDivisible, countAvailableQuantity } = require("./utils/utils");
const { ERROR } = require("./utils/constants");

class User {
  purchaseAmount;
  quantity;
  lottos;

  constructor(purchaseAmount) {
    this.validate(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
    this.quantity = countAvailableQuantity(purchaseAmount);
    //FIXME: App에서 뽑아오기
    this.lottos = User.generateLottoNumbers(this.quantity);
  }

  validate(input) {
    if (!isDivisible(input)) {
      throw new Error(ERROR.INDIVISIBLE);
    }
  }
}

module.exports = User;
