const { Random } = require("@woowacourse/mission-utils");
const messages = require("../constants/messages");
const generalConstants = require("../constants/generalConstants");

class UserNumber {
  constructor(controller) {
    this.controller = controller;
    this.purchasingAmount = null;
    this.lottoToUse = null;
    this.userIssuedLotto = [];
    this.bonusNumber = null;
  }

  validatePurchasingAmount(userPurchasingAmountInput) {
    if (userPurchasingAmountInput % generalConstants.SINGLE_LOTTO_PRICE !== 0) {
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

  getIssuedLotto() {
    const issuedLotto = [];

    for (
      let idx = 0;
      idx < this.purchasingAmount / generalConstants.SINGLE_LOTTO_PRICE;
      idx++
    ) {
      const singleLottoCombination = Random.pickUniqueNumbersInRange(1, 45, 6);
      issuedLotto.push(
        singleLottoCombination.sort((first, second) => first - second),
      );
    }

    return issuedLotto;
  }

  setUserIssuedLottoWithPurchasingAmount() {
    this.userIssuedLotto = this.getIssuedLotto();
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
