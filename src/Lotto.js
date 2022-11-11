class Lotto {
  #numbers;

  constructor(numbers, lottoCost) {
    this.validateLottoNums(numbers);
    this.validateLottoCost(lottoCost);
    this.#numbers = numbers;
  }

  validateLottoNums(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const set = new Set(numbers);
    if (set.size < numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복되는 숫자가 있습니다.');
    }
  }

  validateLottoCost(lottoCost) {
    if (+lottoCost % 1 !== 0) {
      throw new Error('[ERROR] 정수만 입력해주세요.');
    }
    if (+lottoCost % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
  }
}

module.exports = Lotto;
