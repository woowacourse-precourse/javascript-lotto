class BonusNumber {
  #number;

  constructor(number, lottoNumbers) {
    this.validate(number);
    this.isValidRange();
    this.duplicateCheck(lottoNumbers);
    this.isNaturalNumber();
  }

  /**
   * number가 숫자인지 확인합니다.
   * @param {*} number
   */
  validate(number) {
    if (!Number(number))
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    this.#number = Number(number);
  }

  /**
   * number가 0보다 큰지 확인합니다.
   */
  isValidRange() {
    const number = this.#number;
    if (number < 1) throw new Error("[ERROR] 당첨 번호는 0보다 커야 합니다.");
    else if (number > 45)
      throw new Error("[ERROR] 당첨 번호는 46보다 작아야 합니다.");
  }

  /**
   * number가 lottoNumber의 요소와 중복되는지 확인합니다.
   * @param {Array<number>} lottoNumbers
   */
  duplicateCheck(lottoNumbers) {
    const number = this.#number;
    if (lottoNumbers.includes(number))
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  }

  /**
   * number가 자연수인지 확인합니다.
   */
  isNaturalNumber() {
    const number = this.#number;
    if (Math.round(number) !== number)
      throw new Error("[ERROR] 보너스 번호는 자연수여야 합니다.");
  }
}

module.exports = BonusNumber;
