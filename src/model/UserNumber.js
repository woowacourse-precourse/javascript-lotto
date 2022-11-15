const { Random } = require("@woowacourse/mission-utils");
const {
  PURCHASE_MESSAGE,
  BONUS_NUMBER_MESSAGE,
} = require("../constants/messages");
const generalConstants = require("../constants/generalConstants");

class UserNumber {
  constructor(controller) {
    this.controller = controller;
    this.purchasingAmount = null;
    this.lottoToUse = null;
    this.userIssuedLotto = [];
    this.bonusNumber = null;
  }

  /**
   * 구입 금액이 1000 으로 나누어 떨어지는지 검증하는 메서드
   * @param userPurchasingAmountInput {number} [유저 구입금액]
   */
  validatePurchasingAmount(userPurchasingAmountInput) {
    if (userPurchasingAmountInput % generalConstants.SINGLE_LOTTO_PRICE !== 0) {
      throw new Error(PURCHASE_MESSAGE.AMOUNT_ERROR);
    }
  }

  /**
   * 유저 구입금액을 반환하는 getter 메서드
   * @return {number} [유저 구입금액]
   */
  getPurchasingAmount() {
    return this.purchasingAmount;
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
   * @return {number[][]} [발행된 로또]
   */
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

  // 유저의 구입 금액에 따라 로또를 발행하는 메서드
  setUserIssuedLottoWithPurchasingAmount() {
    this.userIssuedLotto = this.getIssuedLotto();
    this.controller.printIssuedLotto(this.userIssuedLotto);
    this.controller.getWinningNumberFromUser();
  }

  /**
   * 당첨번호를 반환하는 getter 메서드
   * @return {number[]} [당첨번호]
   */
  getLottoToUse() {
    return this.lottoToUse;
  }

  /**
   * 당첨 번호를 적용하는 setter 메서드
   * @param lotto {number[]} [당첨번호]
   */
  setLottoToUse(lotto) {
    this.lottoToUse = lotto;
  }

  /**
   * 보너스 번호를 검증하는 메서드
   * @param bonusNumber {number} [보너스 번호]
   */
  validateBonusNumber(bonusNumber) {
    // 정수가 아니라면
    if (!/^\d+$/.test(bonusNumber.toString())) {
      throw new Error(BONUS_NUMBER_MESSAGE.NUMBER_ERROR);
    }
    // 1~45 범주에 들지 않는다면
    if (1 > bonusNumber || bonusNumber > 45) {
      throw new Error(BONUS_NUMBER_MESSAGE.NUMBER_ERROR);
    }
  }

  /**
   * 보너스 번호를 반환하는 getter 메서드
   * @return {number} [보너스 번호]
   */
  getBonusNumber() {
    return this.bonusNumber;
  }

  /**
   * 보너스 번호를 적용하는 메서드
   * @param bonusNumber {number} [보너스 번호
   */
  setBonusNumber(bonusNumber) {
    this.bonusNumber = bonusNumber;
    this.validateBonusNumber(bonusNumber);
    this.controller.getStatistics();
  }
}

module.exports = UserNumber;
