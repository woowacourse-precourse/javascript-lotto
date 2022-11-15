class Bonus {
  #number;

  constructor(number) {
    this.validate(number);
    this.#number = number;
  }

  isNumeric(str) {
    if (typeof str != "string") {
      return false
    }
    return !isNaN(str) && !isNaN(parseFloat(str))
  }

  validate(number) {
    if (number.length !== 1) {
      throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
    }
    if (!this.isNumeric(number)) {
      throw new Error('[ERROR] 오로지 숫자만 입력 가능합니다.')
    }
    if (!(1 <= number <= 45)) {
      throw new Error("[ERROR] 번호가 1 ~ 45까지의 수가 아닙니다.");
    }
    for (let number of number) {
      if (this.#numbers.includes(number)) {
        throw new Error("[ERROR] 보너스 번호는 당첨 번호 6개와 중복되면 안됩니다.");
      }
    }
  }
}

module.exports = Bonus;