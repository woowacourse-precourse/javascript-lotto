class Validator {
  static checkTruthy(truthy) {
    return Boolean(truthy);
  }

  static checkStringType(string) {
    return typeof string === 'string';
  }

  static checkFormatPrice(format) {
    const numberRegExp = /^[0-9]+$/;

    return numberRegExp.test(format);
  }

  static checkDividedBy1000(number) {
    return number % 1000 === 0;
  }

  static checkNumberType(number) {
    return typeof number === 'number';
  }

  static checkFormatSixNumbers(format) {
    const numberRegExp = /^[0-9|,]+$/;

    return numberRegExp.test(format);
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
    return sixNumbers.every(number => number >= 1 && number <= 45);
  }

  static checkUniqueNumber(numbers) {
    return numbers.every((number, i) => numbers.indexOf(number) === i);
  }

  static checkSortByAscending(array) {
    const ascendingSorted = array.sort((a, b) => a - b);

    return array === ascendingSorted;
  }
}

module.exports = Validator;
