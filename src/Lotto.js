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
    for (let num of numbers) {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호의 범위는 1부터 45까지여야 합니다.");
      }
      if (isNaN(num)) {
        throw new Error("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.");
      }
    }
    const numbersSet = new Set(numbers);
    if (numbersSet.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }
}

module.exports = Lotto;
