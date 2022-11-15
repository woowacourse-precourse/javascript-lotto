class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  // 당첨번호를 입력받고, 오류처리
  validate(numbers) {
    if (!numbers.every(Number)) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!numbers.every((number) => 1 <= number && number <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1 ~ 45범위 내의 숫자여야 합니다.");
    }
    //const overlap
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }
}

module.exports = Lotto;
