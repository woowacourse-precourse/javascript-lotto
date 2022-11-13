const { Random } = require("@woowacourse/mission-utils");

class UserNumber {
  constructor(controller) {
    this.controller = controller;
    this.purchasingAmount = null;
    this.userLottoArray = [];
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
    this.setUserLottoArrayWithPurchasingAmount();
  }

  setUserLottoArrayWithPurchasingAmount() {
    for (let idx = 0; idx < this.purchasingAmount / 1000; idx++) {
      const singleLottoCombinationArray = Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );

      this.userLottoArray.push(
        singleLottoCombinationArray.sort((first, second) => first - second),
      );
    }
    this.controller.view.printUserLottoArray();
  }

  getUserLottoArray() {
    return this.userLottoArray;
  }
}

module.exports = UserNumber;
