class BonusNumber {
  static #bonusNumber;

  static get bonusNumber() {
    return BonusNumber.#bonusNumber;
  }

  static refineBonusNumber = (numberStr) => {
    return Number(numberStr);
  };

  static validateBonusNumber = (number) => {
    //TODO
  };

  static setBonusNumber = (number) => {
    this.#bonusNumber = number;
  };
}

module.exports = BonusNumber;
