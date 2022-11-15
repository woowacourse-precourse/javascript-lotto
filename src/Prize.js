const MissionUtils = require("@woowacourse/mission-utils");
const LottoMachine = require("./LottoMachine");
const { RESULT_MESSAGE, RESULT } = require("./Constants");

class Prize {
  #lottoMachine = new LottoMachine();
  #console = MissionUtils.Console;

  constructor(lottos) {
    this.lottos = lottos;
    this.wins = [0, 0, 0, 0, 0, 0]
  }

  calcualteWins() {
    const winningNumbers = this.#lottoMachine.takeWinningNumbers();
    const bonusNumber = this.#lottoMachine.takeBonusNumberExcept(winningNumbers);
    this.lottos.reduce((acc, lotto) => {
      const place = lotto.winWhatPlace(winningNumbers, bonusNumber);
      console.log(`${place}, ${winningNumbers}, ${bonusNumber}`);
      acc[5-place] += 1;
      return acc;
    }, this.wins);
    this.#console.print(this.wins);
    this.#console.close();
  }

  announceResult() {
    this.#console.print("당첨 통계\n---");
    this.wins.forEach((times, idx) => {
      if (idx < 5) {
        this.#console.print(`${RESULT_MESSAGE[idx]}${times}개`);
      }
    });
    this.#console.close();
  }
}

module.exports = Prize;