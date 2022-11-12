class Validator {
  static checkTruthy(truthy) {
    return Boolean(truthy);
  }

  static checkStringType(string) {
    return typeof string === 'string';
  }

  static checkOnlyNumbersInString(string) {
    const numberRegExp = /^[0-9]+$/;

    return numberRegExp.test(string);
  }

  static checkDividedBy1000(number) {
    return number % 1000 === 0;
  }

  static checkNumberType(number) {
    return typeof number === 'number';
  }

  static checkFormatSixNumbers(format) {
    const sixNumbersRegExp = /^[0-9|,]+$/;

    return sixNumbersRegExp.test(format);
  }

  static checkArrayType(array) {
    return Array.isArray(array);
  }

  static checkNumberInArrayType(array) {
    return array.every(number => Validator.checkNumberType(number));
  }

  static checkSixLength(sixNumbers) {
    return sixNumbers.length === 6;
  }

  static checkSixNumbersRange(sixNumbers) {
    return sixNumbers.every(number => Validator.checkRangeOfLottoNumber(number));
  }

  static checkRangeOfLottoNumber(lottoNumber) {
    return lottoNumber >= 1 && lottoNumber <= 45;
  }

  static checkUniqueNumber(numbers) {
    return numbers.every((number, i) => numbers.indexOf(number) === i);
  }
}

module.exports = Validator;
