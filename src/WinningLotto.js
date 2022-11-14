const { MIN_NUMBER, MAX_NUMBER } = require("./utils/constants");
const Lotto = require("./Lotto");

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#validateBonus(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonus(bonusNumber) {
    if (bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER) {
      throw new Error("[ERROR] 보너스 번호의 범위는 1~45 사이여야 합니다.");
    }
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = WinningLotto;
