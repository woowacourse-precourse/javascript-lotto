class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.isDuplicate(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  isDuplicate(numbers) {
    const setArr = new Set(numbers);
    if (setArr.size < numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.')
    }
  }
}

module.exports = Lotto;
