const Lotto = require('../Lotto.js');
class Check {
  checkDivideMoney (money) {
    if (!(money % 1000 === 0)) {
      throw new Error('[ERROR]');
    }
    return true
  }

  checkBonusNumber (number) {
    if (!(number >= 1 && number <= 45)) {
      throw new Error('[ERROR] 보너스 로또 번호가 잘못 입력되었습니다.');
    }
  }

  checkBonusUnique (number) {
    if (number.length > 1) {
      throw new Error('[ERROR] 보너스 로또 번호가 잘못 입력되었습니다.');
    }
  }

  checkBonusVaildation (number) {
    this.checkBonusNumber(number);
    this.checkBonusUnique(number);
    return true;
  }

  checkWinNumVaildation (winningstr) {
    const winningArr = winningstr.split(',').map(Number);
    const lotto = new Lotto(winningArr);
    lotto.checkNumberRange(winningArr);
    lotto.validate(winningArr);
    lotto.checkUniqueRange(winningArr);
    return true;
  }
}
module.exports = Check;
