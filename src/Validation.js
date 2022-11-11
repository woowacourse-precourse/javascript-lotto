class Validation {
  #numberInRangeMessage = '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.';

  constructor() {
    this.winningNumbers;
  }

  purchaseAmount(money) {
    const ZERO_REST_MESSAGE = '[ERROR] 1,000원으로 나누어 떨어지는 금액을 입력해주세요.';
    if (money % 1000 !== 0) throw new Error(ZERO_REST_MESSAGE);
  }

  winningNumber(numbers) {
    this.winningNumbers = numbers;
  }

  bonusNumber(number) {
    const ONLY_ONE_NUMBER_MESSAGE = '[ERROR] 1개의 숫자만 입력해주세요.';
    const NOT_DUPLICATE_MESSAGE = '[ERROR] 당첨 번호와 중복되지 않는 1개의 숫자만 입력해주세요.';

    if (number.length !== 1) throw new Error(ONLY_ONE_NUMBER_MESSAGE);
    if (this.winningNumbers.includes(number[0])) throw new Error(NOT_DUPLICATE_MESSAGE);

    number = Number(number);
    if (!(number >= 1 && number <= 45)) throw new Error(this.#numberInRangeMessage);
  }
}

module.exports = Validation;
