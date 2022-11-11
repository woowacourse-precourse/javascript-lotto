const Lotto = require("./Lotto");

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.validateBonus(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  validateBonus(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호의 범위는 1~45 사이여야 합니다.");
    }
  }
}

module.exports = WinningLotto;
