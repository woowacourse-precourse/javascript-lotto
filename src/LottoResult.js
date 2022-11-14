const { COMMENT, VALUE } = require("./constant");
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
    return lotto.includes(this.#bonusNumber);
  }

  #checkLottos(lottos) {
    lottos.forEach((lotto) => {
      const sameNumbers = this.#getSameNumbers(lotto);

      if (sameNumbers === VALUE.STANDARD_FIFTH)
        this.#numberOfRanks[VALUE.FIFTH_INDEX]++;

      if (sameNumbers === VALUE.STANDARD_FOURTH)
        this.#numberOfRanks[VALUE.FOURTH_INDEX]++;

      if (sameNumbers === VALUE.STANDARD_THIRD)
        this.#checkBonus(lotto)
          ? this.#numberOfRanks[VALUE.SECOND_INDEX]++
          : this.#numberOfRanks[VALUE.THIRD_INDEX]++;

      if (sameNumbers === VALUE.STANDARD_FIRST)
        this.#numberOfRanks[VALUE.FIRST_INDEX]++;
    });
  }

  #calculateYeild(money) {
    let totalReward = 0;

    this.#numberOfRanks.forEach((numberOfRank, index) => {
      totalReward += numberOfRank * VALUE.MONEY_ARRAY[index];
    });

    this.#yield = (totalReward / money) * VALUE.TO_PERCENT;
  }

  printLottoResult() {
    MissionUtils.Console.print(COMMENT.WINTITLE);

    this.#numberOfRanks.forEach((number, index) => {
      MissionUtils.Console.print(COMMENT.RESULT_ARRAY[index] + number + "개");
    });

    MissionUtils.Console.print("총 수익률은 " + this.#yield + "%입니다.");
    MissionUtils.Console.close();
  }
}

module.exports = LottoResult;
