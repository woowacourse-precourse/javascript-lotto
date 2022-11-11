const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("./lib/library");
const Lotto = require("./Lotto");

class LottoSetting {
  #winLotto;
  #bonusNum;

  async main() {
    await this.inputWinLottoNum();
  }

  inputWinLottoNum() {
    return new Promise((resolve, reject) => {
      Console.readLine(INPUT.WIN_NUMBER, this.exportWinLottoArray.bind(this));
      resolve();
    });
  }

  exportWinLottoArray(string) {
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

  inputBonusNum() {}
}
const a = new LottoSetting();
a.main();

module.exports = LottoSetting;
