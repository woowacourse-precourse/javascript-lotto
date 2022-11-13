const Validator = require('../domains/Validator');

class DataChecker {
  static isValidRowDataOfPurchaseAmount(rowData) {
    Validator.checkTruthy(rowData);
    Validator.checkStringType(rowData);
    Validator.checkOnlyNumbersInString(rowData);
  }

  static isValidPurchaseAmount(purchaseAmount) {
    Validator.checkTruthy(purchaseAmount);
    Validator.checkNumberType(purchaseAmount);
    Validator.checkDividedBy1000(purchaseAmount);
  }

  static isValidRowDataOfSixNumbers(rowData) {
    Validator.checkTruthy(rowData);
    Validator.checkStringType(rowData);
    Validator.checkFormatSixNumbers(rowData);
  }

  static isValidSixNumbers(sixNumbers) {
    Validator.checkTruthy(sixNumbers);
    Validator.checkArrayType(sixNumbers);
    Validator.checkNumberInArrayType(sixNumbers);
    Validator.checkSixLength(sixNumbers);
    Validator.checkSixNumbersRange(sixNumbers);
    Validator.checkUniqueNumber(sixNumbers);
  }

  static isValidRowDataOfBonus(rowData) {
    Validator.checkTruthy(rowData);
    Validator.checkStringType(rowData);
    Validator.checkOnlyNumbersInString(rowData);
  }

  static isValidBonus(bonus, sixNumbers) {
    Validator.checkTruthy(bonus);
    Validator.checkNumberType(bonus);
    Validator.checkRangeOfLottoNumber(bonus);
    Validator.checkUniqueNumber([...sixNumbers, bonus]);
  }
}

module.exports = DataChecker;
