const ThrowError = require('./components/ThrowError');
const { BONUS_LOTTO_ERROR } = require('./constant');

class BonusLotto {
  #number;

  constructor(number) {
    this.#number = number;
    this.showValidateResult(this.#number);
  }

  showValidateResult(fullLottoNumber) {
    const resultMessage = this.validate(fullLottoNumber);
    return resultMessage ? ThrowError(BONUS_LOTTO_ERROR[resultMessage]) : fullLottoNumber;
  }

  validate(fullNumber) {
    const [mainNumber, bonusNumber] = fullNumber;
    return (
      this.isNumber(bonusNumber) ||
      this.isNumberRange(bonusNumber) ||
      this.isIncludesNumber(mainNumber, bonusNumber)
    );
  }

  isNumber(number) {
    return /^\d+$/.test(number) === false ? 'NUMBER' : false;
  }

  isNumberRange(number) {
    return Number(number) >= 1 && Number(number) <= 45 ? false : 'RANGE';
  }

  isIncludesNumber(mainNumber, bonusNumber) {
    return mainNumber.filter((main) => main === bonusNumber).length ? 'INCLUDES' : false;
  }
}
module.exports = BonusLotto;
