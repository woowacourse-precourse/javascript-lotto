const { COMMENT, RANK } = require("./constant");
const MissionUtils = require("@woowacourse/mission-utils");

class LottoResult {
  #numberOfRanks;
  #yield;
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber, lottos, money) {
    this.#numberOfRanks = [0, 0, 0, 0, 0];
    this.#yield = 0;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#checkLottos(lottos);
    this.#calculateYeild(money);
  }

  #getSameNumbers(Lottos) {
    let sameNumbers = 0;
    Lottos.forEach((number) => {
      if (this.#winningNumbers.includes(number)) {
        sameNumbers++;
      }
    });
    return sameNumbers;
  }

  #checkBonus(lotto) {
    if (lotto.includes(this.#bonusNumber)) return true;
    return false;
  }

  #checkLottos(lottos) {
    lottos.forEach((lotto) => {
      const sameNumbers = this.#getSameNumbers(lotto);
      if (sameNumbers == 3) this.#numberOfRanks[RANK.FIFTH_INDEX]++;
      if (sameNumbers == 4) this.#numberOfRanks[RANK.FOURTH_INDEX]++;
      if (sameNumbers == 5) {
        this.#checkBonus()
          ? this.#numberOfRanks[RANK.SECOND_INDEX]++
          : this.#numberOfRanks[RANK.THIRD_INDEX]++;
      }
      if (sameNumbers == 6) this.#numberOfRanks[RANK.FIRST_INDEX]++;
    });
  }
}

module.exports = LottoResult;
