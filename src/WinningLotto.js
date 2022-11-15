const WinningLottoValidator = require("./validator/WinningLottoValidator");

class WinningLotto {
  #numbers;
  #bonus;

  setNumbers(numbers){
    this.validateNumbers(numbers);
    this.#numbers = numbers;
  }

  setBonus(bonus){
    this.validateBonus(this.#numbers, bonus);
    this.#bonus = bonus;
  }

  getNumbers(){
    return this.#numbers;
  }

  getBonus(){
    return this.#bonus;
  }

  validateNumbers(numbers) {
    const validator = new WinningLottoValidator();
    validator.validateWinningLottoDuplication(numbers);
    validator.validateWinningLottoIsNaN(numbers);
    validator.validateWinningLottoRange(numbers);
  }

  validateBonus(numbers,bonus){
    const validator = new WinningLottoValidator();
    validator.validateBonusNumberIsNaN(bonus);
    validator.validateBonusNumberRange(bonus);
    validator.validateBonusNumberDuplication(numbers,bonus);
  }
}

module.exports = WinningLotto;
