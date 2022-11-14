const Lotto = require('../Lotto.js');
class Check {
  checkDivideMoney (money) {
    if (!(money % 1000 === 0)) {
      throw new Error('[ERROR]');
    }
    return true
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
