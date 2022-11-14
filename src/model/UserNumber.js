const { Random } = require("@woowacourse/mission-utils");
const messages = require("../constants/messages");

class UserNumber {
  constructor(controller) {
    this.controller = controller;
    this.purchasingAmount = null;
    this.lottoToUse = null;
    this.userIssuedLotto = [];
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
    this.setUserIssuedLottoWithPurchasingAmount();
  }

  getUserIssuedLotto() {
    return this.userIssuedLotto;
  }

  setUserIssuedLottoWithPurchasingAmount() {
    for (let idx = 0; idx < this.purchasingAmount / 1000; idx++) {
      const singleLottoCombination = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.userIssuedLotto.push(
        singleLottoCombination.sort((first, second) => first - second),
      );
    }
    this.controller.printIssuedLotto(this.userIssuedLotto);
    this.controller.getWinningNumberFromUser();
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
