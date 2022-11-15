class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const set = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    for (let number of numbers) {
      if (number < 1 || 45 < number) {
        throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }

    if (set.size !== numbers.length) {
      throw new Error("[ERROR] 중복되지 않는 번호로 입력하세요.");
    }

    for (let number of numbers) {
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자로 입력해주세요.");
      }
    }
  }

  // TODO: 추가 기능 구현
  getWinLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
