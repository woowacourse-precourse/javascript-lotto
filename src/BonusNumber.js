class BonusNumber {
  #number;

  constructor(number, lottoNumbers) {
    this.validate(number);
    this.isValidRange();
    this.duplicateCheck(lottoNumbers);
  }

  validate(number) {
    if (!Number(number))
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    this.#number = Number(number);
  }

  isValidRange() {
    const number = this.#number;
    if (number < 1) throw new Error("[ERROR] 당첨 번호는 0보다 커야 합니다.");
    else if (number > 45)
      throw new Error("[ERROR] 당첨 번호는 46보다 작아야 합니다.");
  }

  duplicateCheck(lottoNumbers) {
    const number = this.#number;
    if (lottoNumbers.includes(number))
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  }
}

module.exports = BonusNumber;
