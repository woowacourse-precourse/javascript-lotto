const { Random } = require("@woowacourse/mission-utils");
const { PRINT_MESSAGE, LOTTO } = require("./utils/constants");
const Validate = require("./Validate");

class UserLotto {
  purchaseAmout;
  count;
  totalNumbers = [];
  constructor(purchaseAmout) {
    this.validate(purchaseAmout);
    this.purchaseAmout = purchaseAmout;
    this.getCount();
    this.getTotalNumbers();
  }

  validate(purchaseAmout) {
    if (
      !isNaN(purchaseAmout) &&
      Validate.isMoneyUnit(purchaseAmout, LOTTO.PURCHASE_UNIT)
    ) {
      return;
    }
    throw new Error(PRINT_MESSAGE.ERROR("올바른 숫자를 입력해주세요."));
  }

  getCount() {
    this.count = Number(this.purchaseAmout) / LOTTO.PURCHASE_UNIT;
  }

  getTotalNumbers() {
    for (let count = 1; count <= this.count; count++) {
      const autoSelectLottoNumber = Random.pickUniqueNumbersInRange(
        LOTTO.NUMBER_RANGE.START,
        LOTTO.NUMBER_RANGE.END,
        LOTTO.NUMBER_RANGE.COUNT
      );
      this.totalNumbers.push(autoSelectLottoNumber);
    }
  }
}

module.exports = UserLotto;
