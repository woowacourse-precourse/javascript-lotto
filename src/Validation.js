class Validation {
  purchaseAmount(money) {
    const MESSAGE = '[ERROR] 1,000원으로 나누어 떨어지는 금액을 입력해주세요.';
    if (money % 1000 !== 0) throw new Error(MESSAGE);
  }
}

module.exports = Validation;
