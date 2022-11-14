class Lotto {
  //함수 / 메서드가 한 가지 일만 하도록 + 15 라인 미만
  //else ~
  //Lotto 필드 변경 금지

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

  issue() {}
  result() {
    //winning, profit
  }
}

module.exports = Lotto;
