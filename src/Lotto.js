class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    numbers.map((item) => {
      if (typeof item !== "number") {
        throw new Error("[ERROR] 숫자만 입력하세요.");
      } else if (item < 1 || item > 45) {
        throw new Error("[ERROR] 1 ~ 45 사이의 숫자만 입력하세요.");
      }
    })

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if ((new Set(numbers)).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    } 
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
