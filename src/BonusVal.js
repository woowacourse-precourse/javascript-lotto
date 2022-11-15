class BonusVal {
    constructor(number, winningNum) {
      this.validateBonusNumber(number, winningNum);
    }
  
    validateBonusNumber(bonus, winningNums) {
      if (isNaN(bonus)) {
        throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
      }
  
      if (winningNums.includes(bonus)) {
        throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
      }
  
      if (bonus <= 0 || bonus > 45) {
        throw new Error('[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자여야 합니다.');
      }
    }
  }
  module.exports = BonusVal;