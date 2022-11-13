const { LOTTO_PRICE } = require("./constants/gameCondition.js");
const { ERROR_MESSAGE } = require("./constants/messages.js");

class CheckError {
  static checkPurchaseAmount(purchaseAmount) {
    // 구입 금액 검증하는 함수
    if (isNaN(purchaseAmount)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    if (purchaseAmount % LOTTO_PRICE !== 0)
      throw new Error(ERROR_MESSAGE.CANT_DIVIDE);
    if (purchaseAmount < 1000) throw new Error(ERROR_MESSAGE.UNDER_BASIC_PRICE);
  }

  static checkLottoNumbers(lottoNumbers) {
    const lottoNumberSet = new Set(lottoNumbers);
    const arrayToString = lottoNumbers.join("");
    if (lottoNumbers.length !== 6)
      // 로또 길이가 6이 아닐 때
      throw new Error(ERROR_MESSAGE.NOT_SIX_LENGTH);
    else if (lottoNumberSet.size !== 6)
      // 로또가 중복된 숫자를 가질 때.
      throw new Error(ERROR_MESSAGE.IS_OVERLAPPED);
    else if (isNaN(arrayToString))
      // 로또에 숫자 이외의 문자가 있을 때.
      throw new Error(ERROR_MESSAGE.NOT_NUMBER_IN_LOTTO);
  }
}

module.exports = CheckError;
