const ThrowError = require('./components/ThrowError');
const { LOTTO_ERROR, LOTTO_INFO } = require('./constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.showValidateResult(this.#numbers);
  }

  showValidateResult(lottoNumber) {
    const resultMessage = this.validate(lottoNumber);
    return resultMessage ? ThrowError(LOTTO_ERROR[resultMessage]) : true;
  }

  validate(numbers) {
    const numbersList = numbers.split(',');
    return (
      this.isNumber(numbersList) ||
      this.isSplit(numbers) ||
      this.isNumberCorrect(numbersList) ||
      this.isNumberRepeated(numbersList) ||
      this.isNumberRange(numbersList)
    );
  }

  isNumber(numbersList) {
    return /^\d+$/.test(numbersList.join('')) === false ? 'NUMBER' : false;
  }

  isSplit(numbers) {
    return !numbers.includes(LOTTO_INFO.SPLITUNIT) ? 'SPLIT' : false;
  }

  isNumberCorrect(numbersList) {
    return numbersList.length !== LOTTO_INFO.PICK ? 'LEGNTH' : false;
  }

  isNumberRepeated(numbersList) {
    return new Set(numbersList).size !== LOTTO_INFO.PICK ? 'REPEAT' : false;
  }

  isNumberRange(numbersList) {
    return numbersList.filter(
      (eachNumber) =>
        Number(eachNumber) >= LOTTO_INFO.START_RANGE && Number(eachNumber) <= LOTTO_INFO.LAST_RANGE
    ).length !== LOTTO_INFO.PICK
      ? 'RANGE'
      : false;
  }
}

module.exports = Lotto;
