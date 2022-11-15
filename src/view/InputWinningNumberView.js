const { Console } = require('@woowacourse/mission-utils');
const { isValidateNumber, isLottoRange, isDuplicate } = require('../utils/validation.js');
const { separateStringBySpecificCharacter } = require('../utils/lottoGameHandler.js');

class InputWinningNumberView {
  isValidateWinningNumber(winningNumber) {
    winningNumber.forEach((number) => {
      isValidateNumber(number);
      isLottoRange(number);
    });
    isDuplicate(winningNumber);
    this.winningNumber = winningNumber.map(Number);
  }

  inputWinningNumberFromUser(judgePrize) {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (winningNumber) => {
      this.isValidateWinningNumber(separateStringBySpecificCharacter(winningNumber, ','));
      this.inputBonusNumberFromUser(judgePrize);
    });
  }

  isValidateBonusNumber(bonusNumber) {
    isValidateNumber(bonusNumber);
    isLottoRange(bonusNumber);
    if (this.winningNumber.includes(Number(bonusNumber)))
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
  }

  inputBonusNumberFromUser(judgePrize) {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      this.isValidateBonusNumber(bonusNumber);
      judgePrize(this.winningNumber, bonusNumber);
    });
  }
}

module.exports = InputWinningNumberView;
