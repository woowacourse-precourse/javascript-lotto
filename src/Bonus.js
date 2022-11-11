class Bonus {
  #number;

  constructor(number) {
    this.validate(number);
    this.#number = number;
  }

  validate(number) {
    this.checkNumber(number);
  }

  checkNumber(number) {
    if (isNaN(number)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
  }
}

module.exports = Bonus;
