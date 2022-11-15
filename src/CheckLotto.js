const { Console } = require("@woowacourse/mission-utils");
const { RULES } = require("./constants");

class CheckLotto {
  #lotto;
  #winningNumber;
  #bonusNumber;
  #rankCount;

  constructor() {
    this.#rankCount = new Array(RULES.RANK_COUNT).fill(0);
    this.#bonusNumber = 0;
    this.#winningNumber = [];
    this.#lotto = [];
  }

  winningNumberMatch(lottoSet, winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;

    lottoSet.map((lotto) => {
      this.#lotto = lotto;
      this.matchScoreRank(this.#winningNumber.filter((num) => lotto.includes(num)).length);
    });
  }

  matchScoreRank(count) {
    switch (count) {
      case 3:
        this.#rankCount[4] += 1;
        break;
      case 4:
        this.#rankCount[3] += 1;
        break;
      case 5:
        this.bonusNumberMatch(this.#bonusNumber);
        break;
      case 6:
        this.#rankCount[0] += 1;
        break;
    }
  }

  bonusNumberMatch(bonusNumber) {
    this.#lotto.includes(parseInt(bonusNumber)) ? (this.#rankCount[1] += 1) : (this.#rankCount[2] += 1);
  }

  play(money, lottoSet, winningNumber, bonusNumber) {
    this.winningNumberMatch(lottoSet, winningNumber, bonusNumber);

    return { rankCount: this.#rankCount };
  }
}
module.exports = CheckLotto;
