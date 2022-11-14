const Validator = require('./Validator');

class LottoValidator extends Validator {
  constructor(lottoPrice) {
    super();
    this.lottoPrice = lottoPrice;
  }

  isPurchasableMoney(money) {
    if (Number(money) < this.lottoPrice) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 구입 금액은 ${this.lottoPrice}원 이상이여야 합니다.`);
    }

    if (Number(money) % this.lottoPrice !== 0) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 1000원 단위로 입력하여야 합니다. (최소 구매금액 : ${this.lottoPrice}) `);
    }
  }

  isValidMoney(input) {
    this.isValidInput(input);
    this.isValidNumber(input);
    super.isValidMoney(input);
    this.isPurchasableMoney(input);
  }
}

module.exports = LottoValidator;
