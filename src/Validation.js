class Validation {
  #notDuplicateMessage = '[ERROR] 중복되지 않는 숫자를 입력해주세요.';

  purchaseAmount(money) {
    const ZERO_REST_MESSAGE = '[ERROR] 1,000원으로 나누어 떨어지는 금액을 입력해주세요.';
    if (money % 1000 !== 0) throw new Error(ZERO_REST_MESSAGE);
  }

  winningNumber(numbers) {
    // 중복된 숫자를 입력한 경우
    if (new Set(numbers).size !== numbers.length) throw new Error(this.#notDuplicateMessage);
  }
}

module.exports = Validation;
