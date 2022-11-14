const { ERROR, LOTTO } = require("./constant/constant");

class Validator {
  checkPurchaseMoney(purchaseMoney) {
    if (this.isNotNumber(purchaseMoney)) {
      throw new Error(ERROR.NOT_NUMBER);
    }

    if (this.isNotUnitOfLottoPrice(purchaseMoney)) {
      throw new Error(ERROR.NOT_UNIT_OF_LOTTO_PRICE);
    }
  }

  checkWinningNumber(winningNumber) {
    if (this.isNotWinningNumberInputFormat(winningNumber)) {
      throw new Error(ERROR.NOT_WINNING_NUMBER_INPUT_FORMAT);
    }
  }

  checkBonusNumber(winningNumber, bonusNumber) {
    if (this.isNotNumber(bonusNumber)) {
      throw new Error(ERROR.NOT_NUMBER);
    }

    if (this.isNotRangeOfLottoNumber(bonusNumber)) {
      throw new Error(ERROR.NOT_RANGE_OF_LOTTO_NUMBER);
    }

    if (this.existInWinningNumber(winningNumber, bonusNumber)) {
      throw new Error(ERROR.EXIST_IN_WINNING_NUMBER);
    }
  }

  checkLotto(lotto) {
    if (this.isNotValidLottoNumberCount(lotto)) {
      throw new Error(ERROR.NOT_VALID_LOTTO_NUMBER_COUNT);
    }

    lotto.forEach((num) => {
      if (this.isNotRangeOfLottoNumber(num)) {
        throw new Error(ERROR.NOT_RANGE_OF_LOTTO_NUMBER);
      }
    });
      
    if (this.hasDuplicateNumber(lotto)){
      throw new Error(ERROR.DUPLICATE_NUMBER);
    }    
  }

  isNotNumber(num) {
    const check = /^[0-9]+$/; 
    return !check.test(num);
  }

  isNotUnitOfLottoPrice(money) {
    return money % LOTTO.PRICE || money === 0;
  }

  isNotWinningNumberInputFormat(winningNumber) {
    const check = /^[0-9]+(,[0-9]+)+$/; 
    return !check.test(winningNumber);
  }

  isNotRangeOfLottoNumber(num) {
    return num < LOTTO.MIN || num > LOTTO.MAX;
  }

  existInWinningNumber(winningNumber, bonusNumber) {
    return winningNumber.includes(bonusNumber);
  }

  isNotValidLottoNumberCount(lotto) {
    return lotto.length !== LOTTO.NUMBER_COUNT;
  }

  hasDuplicateNumber(arr) {
    return new Set(arr).size !== arr.length;
  }
}

module.exports = Validator;
