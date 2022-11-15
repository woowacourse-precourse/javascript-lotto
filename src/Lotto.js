class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6)
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

    const setNumbers = new Set(numbers);
    if (setNumbers.size !== numbers.length)
      throw new Error(
        '[ERROR] 로또 번호는 로또 번호에 중복된 숫자가 있으면 안됩니다.'
      );

    for (let i = 0; i < numbers.length; i++) {
      if (isNaN(Number(numbers[i])) || numbers[i] < 1 || numbers[i] > 45)
        throw new Error('[ERROR] 로또 번호는 1~45사이의 숫자여야 합니다.');
    }
  }

  getValue() {
    return this.#numbers;
  }
}

module.exports = Lotto;
