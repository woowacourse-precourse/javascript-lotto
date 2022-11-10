class Lotto {
  #numbers;
  #bonus;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    // 로또 번호 유효 검사
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  setBonusNum(bonus) {
    // 보너스 번호 설정
    this.#bonus = bonus;
  }
}

module.exports = Lotto;
