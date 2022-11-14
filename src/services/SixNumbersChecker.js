const Validator = require('./Validator');

class SixNumbersChecker {
  static checkRowDataOfSixNumbers(rowData) {
    Validator.checkTruthy(rowData);
    Validator.checkStringType(rowData);
    Validator.checkFormatSixNumbers(rowData);
  }

  static checkSixNumbers(sixNumbers) {
    Validator.checkTruthy(sixNumbers);
    Validator.checkArrayType(sixNumbers);
    Validator.checkNumberInArrayType(sixNumbers);
    Validator.checkSixLength(sixNumbers);
    Validator.checkSixNumbersRange(sixNumbers);
    Validator.checkUniqueNumber(sixNumbers);
  }
}

module.exports = SixNumbersChecker;
