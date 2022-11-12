class PurchaseLotto {
  constructor(userMoneyInput) {
    this.userMoneyInputExceptionHandler(userMoneyInput);
  }

  userMoneyInputExceptionHandler(userMoneyInput) {
    const VALID_INPUT_REGEX = /^[\d]+$/;
    const IS_VALID_NUMBER = VALID_INPUT_REGEX.test(userMoneyInput) && userMoneyInput[0] !== '0';
    if (!IS_VALID_NUMBER) {
      throw new Error('[ERROR] 올바른 입력이 아닙니다.');
    }
    // Total price to purchase lotto must be divisible by 1000
    // Below codes also can catch the case that (total price to purchase lotto) < 1000
    const IS_DIVISIBLE = !(+(userMoneyInput) % 1000);
    if (!IS_DIVISIBLE) {
      throw new Error('[ERROR] 1000원 단위의 금액을 입력해야 합니다.');
    }
  }
}

module.exports = PurchaseLotto;
