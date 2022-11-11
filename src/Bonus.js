class Bonus {
  #number;

  constructor(number) {
    this.validate(number);
    this.#number = number;
  }

  validate(number) {
    this.checkNumber(number);
    this.checkRange(number);
  }

  checkNumber(number) {
    if (isNaN(number)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
  }

  checkRange(number) {
    const MINIMUN_NUMBER = 1;
    const MAXIMUN_NUMBER = 45;

    if (number < MINIMUN_NUMBER || number > MAXIMUN_NUMBER) {
      throw new Error("[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다");
    }
  }
}

module.exports = Bonus;
