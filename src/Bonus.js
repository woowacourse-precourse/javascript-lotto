class Bonus {
  #number;

  constructor(number, winning) {
    this.validate(number, winning);
    this.#number = number;
  }

  validate(number, winning) {
    this.checkNumber(number);
    this.checkRange(number);
    this.checkDuplicate(number, winning);
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
      throw new Error("[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.");
    }
  }

  checkDuplicate(number, winning) {
    if (winning.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}

module.exports = Bonus;
