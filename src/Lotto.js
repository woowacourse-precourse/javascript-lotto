class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.isSorted(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const set = new Set(numbers);
    if (set.size < numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복되는 숫자가 있습니다.');
    }
  }

  isSorted(numbers) {
    numbers.map((number, index) => {
      if (number > numbers[index + 1]) {
        throw new Error('[ERROR] 번호가 오름차순으로 정렬되지 않습니다.');
      }
    });
  }
}

module.exports = Lotto;
