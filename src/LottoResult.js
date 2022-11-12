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
    return lotto.includes(this.#bonusNumber);
  }

  #checkLottos(lottos) {
    lottos.forEach((lotto) => {
      const sameNumbers = this.#getSameNumbers(lotto);
      if (sameNumbers == 3) this.#numberOfRanks[RANK.FIFTH_INDEX]++;
      if (sameNumbers == 4) this.#numberOfRanks[RANK.FOURTH_INDEX]++;
      if (sameNumbers == 5) {
        this.#checkBonus(lotto)
          ? this.#numberOfRanks[RANK.SECOND_INDEX]++
          : this.#numberOfRanks[RANK.THIRD_INDEX]++;
      }
      if (sameNumbers == 6) this.#numberOfRanks[RANK.FIRST_INDEX]++;
    });
  }

  #getTotalReward() {
    let totalReward = 0;

    this.#numberOfRanks.forEach((numberOfRank, index) => {
      totalReward += numberOfRank * RANK.MONEY_ARRAY[index];
    });
    return totalReward;
  }

  #calculateYeild(money) {
    const reward = this.#getTotalReward();
    this.#yield = (reward / money) * 100;
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
