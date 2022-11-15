const { Console } = require('@woowacourse/mission-utils');
const { isValidateNumber, isLottoRange, isDuplicate } = require('../utils/validation.js');
const { separateStringBySpecificCharacter } = require('../utils/common.js');
const { INFORMATION_MESSAGE, ERROR_MESSAGE } = require('../constants/index.js');

class InputWinningNumberView {
  inputWinningNumberFromUser(judgePurchasedLottoOfResult) {
    Console.readLine(INFORMATION_MESSAGE.INPUT_WINNING_NUMBER, (winningNumber) => {
      this.isValidateWinningNumber(separateStringBySpecificCharacter(winningNumber, ','));
      this.inputBonusNumberFromUser(judgePurchasedLottoOfResult);
    });
  }

  isValidateWinningNumber(winningNumber) {
    winningNumber.forEach((number) => {
      isValidateNumber(number);
      isLottoRange(number);
    });
    isDuplicate(winningNumber);
    this.winningNumber = winningNumber.map(Number);
  }

  inputBonusNumberFromUser(judgePurchasedLottoOfResult) {
    Console.readLine(INFORMATION_MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      this.isValidateBonusNumber(bonusNumber);
      judgePurchasedLottoOfResult(this.winningNumber, bonusNumber);
    });
  }

  isValidateBonusNumber(bonusNumber) {
    isValidateNumber(bonusNumber);
    isLottoRange(bonusNumber);
    if (this.winningNumber.includes(Number(bonusNumber))) throw new Error(ERROR_MESSAGE.BONUS_NUMBER_ALREADY_EXISTS);
  }
}

module.exports = InputWinningNumberView;
