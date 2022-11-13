class Validator {
  checkPurchaseMoney(purchaseMoney) {
    if (this.isNotNumber(purchaseMoney)) {
      throw new Error("[ERROR] 로또 번호는 숫자만 입력 가능합니다.");
    }

    if (this.isNotUnitOfLottoPrice(purchaseMoney)) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로만 입력 가능합니다.");
    }
  }

  checkWinningNumber(winningNumber) {
    if (this.isNotWinningNumberInputFormat(winningNumber)) {
      throw new Error("[ERROR] 숫자를 쉼표로 구분하여 입력해주세요.");
    }
  }

  checkBonusNumber(winningNumber, bonusNumber) {
    if (this.isNotNumber(bonusNumber)) {
      throw new Error("[ERROR] 로또 번호는 숫자만 입력 가능합니다.");
    }

    if (this.isNotRangeOfLottoNumber(bonusNumber)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    if (this.isDuplicateWithWinningNumber(winningNumber, bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호에 존재하지 않는 값이어야 합니다.");
    }
  }

  checkLotto(lotto) {
    if (this.isNotValidLottoNumberCount(lotto)) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    lotto.forEach((num) => {
      if (this.isNotRangeOfLottoNumber(num)) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
      
    if (this.hasDuplicateNumber(lotto)){
      throw new Error("[ERROR] 로또 번호에 중복된 값이 포함되어있습니다.");
    }    
  }

  isNotNumber(num) {
    const check = /^[0-9]+$/; 
    return !check.test(num);
  }

  isNotUnitOfLottoPrice(money) {
    return money % 1000 || money === 0;
  }

  isNotWinningNumberInputFormat(winningNumber) {
    const check = /^[0-9]+(,[0-9]+)+$/; 
    return !check.test(winningNumber);
  }

  isNotRangeOfLottoNumber(num) {
    return num < 1 || num > 45;
  }

  isDuplicateWithWinningNumber(winningNumber, bonusNumber) {
    return winningNumber.includes(bonusNumber);
  }

  isNotValidLottoNumberCount(lotto) {
    return lotto.length !== 6;
  }

  hasDuplicateNumber(arr) {
    return new Set(arr).size !== arr.length;
  }
}

module.exports = Validator;
