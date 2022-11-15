const { checkLottoDuplicate, checkLottoRange } = require('./Exception');
const Lotto = require('./Lotto');
const { Message } = require('./Message');

class WinLotto extends Lotto {
  #bonusNumber;

  setBonusNumber(bonusNumber) {
    this.validateBonus(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }
  validateBonus(bonusNumber) {
    if (!checkLottoDuplicate([bonusNumber, ...this.getNumbers()])) throw new Error(Message.ERROR_LOTTO_BONUS_DUPLICATE);
    if (!checkLottoRange([bonusNumber, ...this.getNumbers()])) throw new Error(Message.ERROR_LOTTO_RANGE);
  }
}
module.exports = WinLotto;
