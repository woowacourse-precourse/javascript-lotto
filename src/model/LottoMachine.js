const { BONUS_NUMBER_MESSAGE } = require("../constants/messages");

class LottoMachine {
  constructor(controller) {
    this.controller = controller;
    this.lottoToUse = [];
    this.bonusNumber = null;
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
   * @param lottoToUse {number[]} [당첨 번호]
   */
  validateBonusNumber(bonusNumber, lottoToUse) {
    // 정수가 아니라면
    if (!/^\d+$/.test(bonusNumber.toString())) {
      throw new Error(BONUS_NUMBER_MESSAGE.NUMBER_ERROR);
    }
    // 1~45 범주에 들지 않는다면
    if (1 > bonusNumber || bonusNumber > 45) {
      throw new Error(BONUS_NUMBER_MESSAGE.NUMBER_ERROR);
    }
    // 당첨 번호에 보너스 번호가 있다면
    if (lottoToUse.includes(bonusNumber)) {
      throw new Error(BONUS_NUMBER_MESSAGE.UNIQUE_ERROR);
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
    this.validateBonusNumber(bonusNumber, this.lottoToUse);
    this.controller.getStatistics();
  }
}

module.exports = LottoMachine;
