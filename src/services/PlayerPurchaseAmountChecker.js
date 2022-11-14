const Validator = require('./Validator');

class PlayerPurchaseAmountChecker {
  static checkRowDataOfPurchaseAmount(rowData) {
    Validator.checkTruthy(rowData);
    Validator.checkStringType(rowData);
    Validator.checkOnlyNumbersInString(rowData);
  }

  static checkPurchaseAmount(purchaseAmount) {
    Validator.checkTruthy(purchaseAmount);
    Validator.checkNumberType(purchaseAmount);
    Validator.checkDividedBy1000(purchaseAmount);
  }
}

module.exports = PlayerPurchaseAmountChecker;
