class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  validateLottoNumbers(numbers) {
    this.validateLengthIsSix(numbers);
    this.validateIsDuplication(numbers);
  }

  validateLengthIsSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  validateIsDuplication(numbers) {
    const duplicationCheck = new Set(numbers);
    if (duplicationCheck.size !== numbers.length) {
      throw new Error('[ERROR] 중복이 없는 서로 다른 숫자를 입력하세요.');
    }
  }
}

module.exports = Lotto;
