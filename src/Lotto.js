const throwError = require('./components/throwError');
const { LOTTO_ERROR, LOTTO_INFO } = require('./constant');

class Lotto {
  #numbers;

  constructor (numbers) {
    this.#numbers = numbers;
    this.showValidateResult(this.#numbers);
  }

  showValidateResult (lottoNumbers) {
    const resultMessage = this.validate(lottoNumbers);
    return resultMessage ? throwError(LOTTO_ERROR[resultMessage]) : true;
  }

  validate (numbersList) {
    return (
      this.isNumber(numbersList)
      || this.isSplit(numbersList)
      || this.isNumberLength(numbersList)
      || this.isNumberRepeated(numbersList)
      || this.isNumberRange(numbersList)
      || this.isIncludeZero(numbersList)
    );
  }

  isNumber (numbersList) {
    return /^\d+$/.test(numbersList.join('')) ? false : 'NUMBER';
  }

  isSplit (numbersList) {
    return numbersList.length === 1 ? 'SPLIT' : false;
  }

  isNumberLength (numbersList) {
    return numbersList.length === LOTTO_INFO.PICK ? false : 'LEGNTH';
  }

  isNumberRepeated (numbersList) {
    return new Set(numbersList).size === LOTTO_INFO.PICK ? false : 'REPEAT';
  }

  isNumberRange (numbersList) {
    return numbersList.filter(
      (nums) => Number(nums) >= LOTTO_INFO.START_RANGE && Number(nums) <= LOTTO_INFO.LAST_RANGE,
    ).length === LOTTO_INFO.PICK
      ? false
      : 'RANGE';
  }

  isIncludeZero (numberList) {
    return numberList.filter((number) => number.startsWith('0')).length ? 'ZERO' : false;
  }
}

module.exports = Lotto;
