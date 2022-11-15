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

    for (let number of numbers) {
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자가 아닌 문자를 입력했습니다.");
      }
    }

    for (let number of numbers) {
      if (1 > number || number > 45) {
        throw new Error("[ERROR] 1~45 중의 자연수를 입력하세요.");
      }
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
    }
  }

  getLottoNumbers() {
    return `[${this.#numbers.join(", ")}]`;
  }

  getLottoNumbersArray() {
    return this.#numbers;
  }
}

module.exports = Lotto;
