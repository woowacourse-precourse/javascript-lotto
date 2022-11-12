const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

// - [ ] 로또번호를 비교하는 기능 - compareLotto
// - [ ] 당첨 내역을 출력하는 기능 - printWinResult
// - [ ] 수익률을 계산하는 기능 - printGainPercent
class LottoCalculate {
  #winLotto;
  #boughtLottos;

  constructor(win, lottos) {
    this.#winLotto = win;
    this.#boughtLottos = lottos;
  }

  compareLotto(my, win) {}
  printWinResult() {}
  printGainPercent() {}
}

module.exports = LottoCalculate;
