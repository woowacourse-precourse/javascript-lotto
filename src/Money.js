const { MESSAGE } = require('./Constants');

class Money {
  constructor(amount) {
    this.validate(amount);
    this.amount = amount;
    this.numOfLotto = amount / 1000;
  }

  /**
   * 구입 금액이 주어지면 에러를 체크합니다.
   * @param {number} amount - 구입 금액
   */
  validate(amount) {
    if (amount % 1000 !== 0) throw new Error(MESSAGE.ERROR_NO_THOUSAND_WON);
  }
}
module.exports = Money;
