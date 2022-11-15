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

    if (new Set(numbers).size !== 6){
      throw new Error("[ERROR] 중복되지 않은 숫자를 입력해주세요.");
    }

    for (let ind = 0; ind < numbers.length; ind++){
      if (numbers[ind] > 45 || numbers[ind] <= 0){
        throw new Error("[ERROR] 1 ~ 45사이의 숫자를 입력해주세요.");
      }
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
