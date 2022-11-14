const { Random } = require("@woowacourse/mission-utils");
const messages = require("../constants/messages");

class UserNumber {
  constructor(controller) {
    this.controller = controller;
    this.purchasingAmount = null;
    this.lottoToUse = null;
    this.userLottoArray = [];
    this.bonusNumber = null;
  }

  validatePurchasingAmount(userPurchasingAmountInput) {
    if (userPurchasingAmountInput % 1000 !== 0) {
      throw new Error(messages.PURCHASING_AMOUNT_ERROR_MESSAGE);
    }
  }

  getPurchasingAmount() {
    return this.purchasingAmount;
  }

  setPurchasingAmount(userPurchasingAmountInput) {
    this.validatePurchasingAmount(userPurchasingAmountInput);
    this.purchasingAmount = Number(userPurchasingAmountInput);
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
    this.controller.printIssuedLotto(this.userLottoArray);
    this.controller.getWinningNumberFromUser();
  }

  getUserLottoArray() {
    return this.userLottoArray;
  }

  getLottoToUse() {
    return this.lottoToUse;
  }

  setLottoToUse(lotto) {
    this.lottoToUse = lotto;
  }

  validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(messages.BONUS_NUMBER_ERROR_MESSAGE);
    }
    if (1 > bonusNumber || bonusNumber > 45) {
      throw new Error(messages.BONUS_NUMBER_ERROR_MESSAGE);
    }
  }

  getBonusNumber() {
    return this.bonusNumber;
  }

  setBonusNumber(bonusNumber) {
    this.bonusNumber = bonusNumber;
    this.validateBonusNumber(bonusNumber);
    this.controller.getStatistics();
  }
}

module.exports = UserNumber;
