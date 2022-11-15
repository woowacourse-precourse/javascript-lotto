const { EXCEPTION } = require("./lib/library");
const Lotto = require("./Lotto");

class LottoSetting {
  #winLotto;
  #bonusNum;

  inputWinLottoNum(string) {
    this.winNumToLottoClass(string);
    return;
  }

  winNumToLottoClass(string) {
    const strArr = string.split(",");
    const numArr = strArr.map((char) => parseInt(char));
    this.#winLotto = this.isLottoNum(numArr);
    return;
  }

  isLottoNum(array) {
    let lotto;
    try {
      lotto = new Lotto(array);
    } catch (e) {
      throw e;
    }
    return lotto;
  }

  inputBonusNum(bonus) {
    this.#bonusNum = this.isBonusNum(bonus);
    return;
  }

  isBonusNum(number) {
    const num = parseInt(number);
    if (num < 1 || num > 45) throw EXCEPTION("숫자 범위 초과");
    if (this.#winLotto.getLottoArr().includes(num))
      throw EXCEPTION("로또번호와 중복됩니다.");
    return num;
  }

  getWinInfo() {
    return { winLotto: this.#winLotto, bonus: this.#bonusNum };
  }
}

module.exports = LottoSetting;
