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
  }

  checkLengthEqualsSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkEachElement(numbers) {
    for (let element of numbers) {
      if (isNaN(element)) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
      const ELEMENT_IN_NUMBER = parseInt(element);
      if (ELEMENT_IN_NUMBER < 1 || ELEMENT_IN_NUMBER > 45) {
        throw new Error("[ERROR] 로또 번호는 1-45 사이 숫자여야 합니다.");
      }
    }
  }
}

module.exports = Lotto;
