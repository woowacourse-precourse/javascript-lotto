const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("./lib/library");
const Lotto = require("./Lotto");

class LottoSetting {
  inputWinLottoNum() {
    Console.readLine(INPUT.WIN_NUMBER);
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

  exportWinLottoArray(string) {
    return string.split(",");
  }
  inputBonusNum() {}
}

module.exports = LottoSetting;
