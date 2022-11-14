const Validator = require('./Validator');

class BonusChecker {
  static checkRowDataOfBonus(rowData) {
    Validator.checkTruthy(rowData);
    Validator.checkStringType(rowData);
    Validator.checkOnlyNumbersInString(rowData);
  }

  static checkBonus(bonus, sixNumbers) {
    Validator.checkTruthy(bonus);
    Validator.checkNumberType(bonus);
    Validator.checkRangeOfLottoNumber(bonus);
    Validator.checkUniqueNumber([...sixNumbers, bonus]);
  }
}

module.exports = BonusChecker;
