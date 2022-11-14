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

    for (let i=0; i<numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 45) {
        throw new Error("[ERROR] 로또 번호의 숫자 범위는 1~45까지입니다.");
      }

      if (numbers.indexOf(numbers[i]) !== i) {
        throw new Error("[ERROR] 로또 번호에 중복되는 번호가 있을 수 없습니다.");
      }
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
