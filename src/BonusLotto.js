const throwError = require('./components/throwError');
const { BONUSLOTTO_ERROR, BONUSLOTTO_INFO } = require('./constant');

class BonusLotto {
  #number;

  constructor (number) {
    this.#number = number;
    this.showValidateResult(this.#number);
  }

  showValidateResult (fullLottoNumber) {
    const resultMessage = this.validate(fullLottoNumber);
    return resultMessage ? throwError(BONUSLOTTO_ERROR[resultMessage]) : fullLottoNumber;
  }

  validate (fullNumber) {
    const [mainNumber, bonusNumber] = fullNumber;
    return (
      this.isNumber(bonusNumber)
      || this.isNumberRange(bonusNumber)
      || this.isIncludesNumber(mainNumber, bonusNumber)
      || this.isIncludeZero(bonusNumber)
    );
  }

  isNumber (number) {
    return /^\d+$/.test(number) === false ? 'NUMBER' : false;
  }

  isNumberRange (number) {
    return Number(number) >= BONUSLOTTO_INFO.START_RANGE
      && Number(number) <= BONUSLOTTO_INFO.LAST_RANGE
      ? false
      : 'RANGE';
  }

  isIncludesNumber (mainNumber, bonusNumber) {
    return mainNumber.filter((main) => main === bonusNumber).length ? 'INCLUDES' : false;
  }

  isIncludeZero (number) {
    return number.startsWith('0') ? 'ZERO' : false;
  }
}

module.exports = BonusLotto;
