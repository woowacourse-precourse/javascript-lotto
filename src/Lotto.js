class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const set = new Set(numbers);
    const newNumbers = [...set];
    if (numbers.length != newNumbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복되는 값이 있습니다.");
    }

    for (let i = 0; i < 6; i++) {
      if (numbers[i] < 1 || numbers[i] > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자만 가능합니다.");
      }
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
