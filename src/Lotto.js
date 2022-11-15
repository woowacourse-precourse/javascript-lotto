class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLotto(numbers);
    this.#numbers = numbers;
  }

  validateLotto(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    numbers.forEach((number) => {
      if(isNaN(number)) throw new Error("[ERROR] 입력 형식이 올바르지 않습니다.")
    })

    const numberSet = new Set(numbers);
    if(numberSet.size < numbers.length) throw new Error("[ERROR] 중복된 번호가 있습니다.");
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }
}

module.exports = Lotto;
