class UserNumber {
  constructor(controller) {
    this.controller = controller;
    this.purchasingAmount = null;
  }

  validatePurchasingAmount(userPurchasingAmountInput) {
    if (userPurchasingAmountInput % 1000 !== 0) {
      this.controller.view.printPurchasingAmountErrorMessage();
    }
  }

  getPurchasingAmount() {
    return this.getPurchasingAmount;
  }

  setPurchasingAmount(userPurchasingAmountInput) {
    this.validatePurchasingAmount(userPurchasingAmountInput);
    this.purchasingAmount = userPurchasingAmountInput;
  }
}

module.exports = UserNumber;
