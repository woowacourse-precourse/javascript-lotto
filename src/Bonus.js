class Bonus {
  constructor(bonusNumber, winNumber) {
    this.validate(bonusNumber, winNumber);
  }

  validate(bonusNumber, winNumber) {
    this.checkIsNumber(bonusNumber);
    this.checkRange(bonusNumber);
    this.checkDuplicate(bonusNumber, winNumber);
  }

  checkIsNumber(number) {
    if (isNaN(number) === true) {
      throw new Error('[ERROR] 보너스 번호는 한자리 숫자여야 합니다.');
    }
  }

  checkRange(number) {
    if (number > 45 || number < 1) {
      throw new Error('[ERROR] 보너스 번호는 1 ~ 45 사이여야 합니다.')
    }
  }

  checkDuplicate(number, winNumber) {
    if (winNumber.includes(number)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되면 안 됩니다.');
    }
  }
}

module.exports =  Bonus;