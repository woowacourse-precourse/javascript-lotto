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
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 중복된 로또 번호가 존재합니다.");
    }
  }

  setBonusNum(bonusNum) {
    if (this.#numbers.includes(bonusNum)) {
      throw new Error("[ERROR] 중복된 입력이 존재합니다.");
    }
    this.#numbers.push(bonusNum);
  }

  getLottoNum() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
