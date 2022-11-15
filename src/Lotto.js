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
    const temp = new Set(numbers);
    if (temp.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되어서는 안됩니다.");
    }
    this.isValidNumber(numbers);
  }

  isValidNumber(numbers) {
    const regExp = /\D/g;

    for (let index = 0; index < numbers.length; index++) {
      if (regExp.test(numbers[index])) {
        throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
      }
      if (numbers[index] < 1 || numbers[index] > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
      }
    }
  }
}

module.exports = Lotto;
