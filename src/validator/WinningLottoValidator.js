const { ERROR_MESSAGE } = require("../constants");

class WinningLottoValidator {
  validateWinningLottoDuplication(winningLotto) {
    const winningLottoSet = new Set(winningLotto);
    if(winningLottoSet.size !== 6){
      throw ERROR_MESSAGE.WINNING_LOTTO_DUPLICATION_ERROR;
    }
  }
  
  validateBonusNumberDuplication(winningLotto, bonusNumber) {
    if(winningLotto.includes(bonusNumber)){
      throw ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION_ERROR;
    }
  }

  validateWinningLottoRange(winningLotto) {
    winningLotto.forEach((number)=>{
      if(number < 1 || number > 45){
        throw ERROR_MESSAGE.NUMBER_RANGE_ERROR;
      }
    });
  }

  validateBonusNumberRange(bonusNumber) {
    if(bonusNumber < 1 || bonusNumber > 45){
      throw ERROR_MESSAGE.NUMBER_RANGE_ERROR;
    }
  }
  
  validateWinningLottoIsNaN(winningLotto) {
    winningLotto.forEach((number)=>{
      if(isNaN(number)){
        throw ERROR_MESSAGE.NUMBER_IS_NAN_ERROR;
      }
    });
  }
  
  validateBonusNumberIsNaN(bonusNumber) {
    if(isNaN(bonusNumber)){
      throw ERROR_MESSAGE.NUMBER_IS_NAN_ERROR;
    }
  }
}

module.exports = WinningLottoValidator;
