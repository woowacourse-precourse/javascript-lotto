const {
  checkDuplicate,
  checkLength,
  checkLottoRange,
  checkNumberRange,
  checkBonusDuplicate,
} = require("./LottoValidation");
class Lotto {
  #numbers = {
    winning: [],
    bonus: null,
  };

  constructor(winningNumbers) {
    // 당첨 번호 생성자
    const winning = winningNumbers.map((number) => Number(number));
    Lotto.validate(winning);
    this.#numbers = { winning };
  }

  static validate(number) {
    // 당첨 번호 유효성 검사
    checkLength(number);
    checkLottoRange(number);
    checkDuplicate(number);
  }
  static validate_Bonus(number, winningNumbers) {
    // 당첨 번호 및 보너스 번호 유효성 검사
    checkNumberRange(number);
    checkBonusDuplicate(number, winningNumbers);
  }
  setBonusNumber(bonusNumber) {
    // 보너스 번호 셋
    Lotto.validate_Bonus(bonusNumber, this.#numbers.winning);

    this.#numbers.bonus = bonusNumber;
  }

  getNumbers() {
    // 당첨 번호 출력
    return this.#numbers;
  }
}

module.exports = Lotto;
