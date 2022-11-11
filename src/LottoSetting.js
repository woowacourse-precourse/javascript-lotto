const { Console } = require("@woowacourse/mission-utils");
const { INPUT, EXCEPTION } = require("./lib/library");
const Lotto = require("./Lotto");

class LottoSetting {
  #winLotto;
  #bonusNum;

  inputWinLottoNum() {
    Console.readLine(INPUT.WIN_NUMBER, (string) => {
      this.winNumToLottoClass(string);
      this.inputBonusNum();
    });
  }

  winNumToLottoClass(string) {
    const strArr = string.split(",");
    const numArr = strArr.map((char) => parseInt(char));
    this.#winLotto = this.isLottoNum(numArr);
    this.#winLotto.printNumbers();
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

  inputBonusNum() {
    Console.readLine(INPUT.BONUS, (number) => {
      this.#bonusNum = this.isBonusNum(number);
      Console.print(this.#bonusNum);
    });
  }

  isBonusNum(number) {
    const num = parseInt(number);
    if (num < 1 || num > 45) throw EXCEPTION("숫자 범위 초과");
    if (this.#winLotto.getLottoArr().includes(num))
      throw EXCEPTION("로또번호와 중복됩니다.");
    return num;
  }

  getWinInfo() {
    return { lotto: this.#winLotto, num: this.#bonusNum };
  }
}

module.exports = LottoSetting;
