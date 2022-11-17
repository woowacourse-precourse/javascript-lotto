class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const winningNumber = numbers.split(',').map((num) => Number(num));

    if (winningNumber.length !== 6) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
    if (winningNumber.filter((num) => num >= 1 && num <= 45).length !== 6) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (new Set(winningNumber).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
  }

  // TODO: 추가 기능 구현
  getNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
