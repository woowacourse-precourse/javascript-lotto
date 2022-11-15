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
  getLottoResult(userLotto) {
    const numInclude = this.compareUserLotto(userLotto);
    if (numInclude === 6) return 'First';
    if (numInclude === 5) {
      if (userLotto.includes(this.#bonusNumber)) return 'Second';
      return 'Third';
    }
    if (numInclude === 4) return 'Fourth';
    if (numInclude === 3) return 'Fifth';
    return 0;
  }
  compareUserLotto(userLotto) {
    const winLotto = this.getNumbers();
    return userLotto.filter(userNum => winLotto.includes(userNum)).length;
  }
}
module.exports = WinLotto;
