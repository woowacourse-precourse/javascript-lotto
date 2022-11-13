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
    // TODO : 1 - 45 사이 숫자.
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

  static checkLottoSort(lottoArray) {
    lottoArray.forEach((lotto) => {
      if (!CheckError.isAscendingArray(lotto))
        throw new Error(ERROR_MESSAGE.NOT_ASCENDING_ARR);
    });
  }

  static isAscendingArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    return true;
  }

  static checkWinnerNumber(winningNumber) {
    const winningNumberArray = winningNumber.split(",");
    CheckError.checkLottoNumbers(winningNumberArray);
    return winningNumberArray;
  }

  static checkBonusNumber(bonusNumber, winnerNumberArray) {
    // TODO: 1- 45 사이 숫자인지 아닌지
    // TODO: 당첨 번호 숫자들과 겹치는지 안 겹치는지.
  }

  static isRangeInLottoNumber(number) {
    // 범위 안에 있다면 true를 리턴.
    return number >= 1 && number <= 45;
  }
}

module.exports = CheckError;
