class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 서로 다른 숫자로 이루어져야 합니다.');
    }
    let isNumberInRange = numbers.every(number => {
      return number && number >= 1 && number <= 45;
    });
    if (!isNumberInRange) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 수들로 이루어져야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
