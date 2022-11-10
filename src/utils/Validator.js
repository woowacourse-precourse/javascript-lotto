class Validator {
  static checkTruthy(truthy) {
    return Boolean(truthy);
  }

  static checkStringType(string) {
    return typeof string === 'string';
  }

  static checkFormat(format) {
    const numberRegExp = /^[0-9]+$/;

    return numberRegExp.test(format);
  }

  static checkDividedBy1000(number) {
    return number % 1000 === 0;
  }

  static checkNumberType(number) {
    return typeof number === 'number';
  }
}

module.exports = Validator;
