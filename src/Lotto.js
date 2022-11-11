const ThrowError = require('./components/ThrowError');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.showValidateResult(this.#numbers);
  }

  showValidateResult(lottoNumber) {
    const resultMessage = this.validate(lottoNumber);
    return resultMessage ? ThrowError(resultMessage) : true;
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
    return !numbers.includes(',') ? 'SPLIT' : false;
  }

  isNumberCorrect(numbersList) {
    return numbersList.length !== 6 ? 'LENGTH' : false;
  }

  isNumberRepeated(numbersList) {
    return new Set(numbersList).size !== 6 ? 'REPEAT' : false;
  }

  isNumberRange(numbersList) {
    return numbersList.filter((eachNumber) => Number(eachNumber) >= 1 && Number(eachNumber) <= 45)
      .length !== 6
      ? 'RANGE'
      : false;
  }
}

module.exports = Lotto;
