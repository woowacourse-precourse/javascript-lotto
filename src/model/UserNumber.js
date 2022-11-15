const { Random } = require("@woowacourse/mission-utils");
const { PURCHASE_MESSAGE } = require("../constants/messages");
const generalConstants = require("../constants/generalConstants");

class UserNumber {
  constructor(controller) {
    this.controller = controller;
    this.purchasingAmount = null;
    this.userIssuedLotto = [];
  }

  /**
   * 유저 구입금액을 반환하는 getter 메서드
   * @return {number} [유저 구입금액]
   */
  getPurchasingAmount() {
    return this.purchasingAmount;
  }

  /**
   * 구입 금액이 1000 으로 나누어 떨어지는지 검증하는 메서드
   * @param userPurchasingAmountInput {number} [유저 구입금액]
   */
  validatePurchasingAmount(userPurchasingAmountInput) {
    if (!/^\d+$/.test(userPurchasingAmountInput.toString())) {
      throw new Error(PURCHASE_MESSAGE.AMOUNT_ERROR);
    }
    if (userPurchasingAmountInput % generalConstants.SINGLE_LOTTO_PRICE !== 0) {
      throw new Error(PURCHASE_MESSAGE.AMOUNT_ERROR);
    }
  }

  /**
   * 유저 구입금액을 적용하는 setter 메서드
   * @param userPurchasingAmountInput {number} [유저 구입금액]
   */
  setPurchasingAmount(userPurchasingAmountInput) {
    this.validatePurchasingAmount(userPurchasingAmountInput);
    this.purchasingAmount = Number(userPurchasingAmountInput);
    this.setUserIssuedLottoWithPurchasingAmount();
  }

  /**
   * 유저에게 발행된 로또를 반환하는 getter 메서드
   * @return {number[][]} [발행된 로또]
   */
  getUserIssuedLotto() {
    return this.userIssuedLotto;
  }

  /**
   * 유저에게 로또를 발행해주는 메서드
   * @param purchasingAmount {number} [유저 구입금액]
   * @return {number[][]} [발행된 로또]
   */
  getIssuedLotto(purchasingAmount) {
    const issuedLotto = [];
    for (
      let idx = 0;
      idx < purchasingAmount / generalConstants.SINGLE_LOTTO_PRICE;
      idx++
    ) {
      const singleLottoCombination = Random.pickUniqueNumbersInRange(1, 45, 6);
      issuedLotto.push(
        singleLottoCombination.sort((first, second) => first - second),
      );
    }
    return issuedLotto;
  }

  // 유저의 구입 금액에 따라 로또를 발행하는 메서드
  setUserIssuedLottoWithPurchasingAmount() {
    this.userIssuedLotto = this.getIssuedLotto(this.purchasingAmount);
    this.controller.printIssuedLotto(this.userIssuedLotto);
    this.controller.getWinningNumberFromUser();
  }
}

module.exports = UserNumber;
