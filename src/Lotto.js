const ThrowError = require('./components/ThrowError');
const { LOTTO_ERROR, LOTTO_INFO } = require('./constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.showValidateResult(this.#numbers);
  }

  showValidateResult(lottoNumbers) {
    const resultMessage = this.validate(lottoNumbers);
    return resultMessage ? ThrowError(LOTTO_ERROR[resultMessage]) : true;
  }

  validate(numbers) {
    const numbersList = numbers.split(LOTTO_INFO.SPLITUNIT);
    return (
      this.isNumber(numbersList) ||
      this.isSplit(numbers) ||
      this.isNumberCorrect(numbersList) ||
      this.isNumberRepeated(numbersList) ||
      this.isNumberRange(numbersList)
    );
  }

  isNumber(numbersList) {
    return /^\d+$/.test(numbersList.join('')) ? false : 'NUMBER';
  }

  isSplit(numbers) {
    return numbers.includes(LOTTO_INFO.SPLITUNIT) ? false : 'SPLIT';
  }

  isNumberCorrect(numbersList) {
    return numbersList.length === LOTTO_INFO.PICK ? false : 'LEGNTH';
  }

  isNumberRepeated(numbersList) {
    return new Set(numbersList).size === LOTTO_INFO.PICK ? false : 'REPEAT';
  }

  isNumberRange(numbersList) {
    return numbersList.filter(
      (number) =>
        Number(number) >= LOTTO_INFO.START_RANGE && Number(number) <= LOTTO_INFO.LAST_RANGE
    ).length === LOTTO_INFO.PICK
      ? false
      : 'RANGE';
  }
}

module.exports = Lotto;
