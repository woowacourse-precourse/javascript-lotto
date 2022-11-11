class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkLengthEqualsSix(numbers);
    this.checkEachNumberInValidRange(numbers);
    this.checkRedundancy(numbers);
  }

  checkLengthEqualsSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkEachNumberInValidRange(numbers) {
    for (let number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1-45 사이 숫자여야 합니다.");
      }
    }
  }

  checkRedundancy(numbers) {
    let temp = [];
    for (let number of numbers) {
      if (temp.includes(number)) {
        throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
      }
      temp.push(number);
    }
  }

  includesNumber(number) {
    return this.#numbers.includes(number);
  }
}

module.exports = Lotto;
