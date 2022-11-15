const Money = require('../Money/Money');

class LottoPrice extends Money {
  UNIT = 1_000;

  constructor(amount) {
    super(amount);
    this.validateRange(amount);
  }

  validateRange(amount) {
    const UNIT = this.UNIT;
    const MESSAGE = `[ERROR] ${UNIT}원 단위로 입력해야 합니다.`;

    if (!this.isInRange(amount)) throw new Error(MESSAGE);
  }

  isInRange(amount) {
    const UNIT = this.UNIT;

    return UNIT <= amount && amount % UNIT === 0;
  }
}

module.exports = LottoPrice;
