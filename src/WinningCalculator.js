const MissionUtils = require("@woowacourse/mission-utils");

class WinningCalculator {
  #lottos;
  #winningLotto;
  #rank;

  constructor(lottos, winningLotto) {
    this.#lottos = lottos;
    this.#winningLotto = winningLotto;
    this.#rank = Array.from({ length: 5 }, () => 0);
    this.calculateRank();
  }

  getMatchNumber(numbers, winningNumbers) {
    return numbers.filter((number) => winningNumbers.includes(number));
  }

  calculateRank() {
    this.#lottos.map((lotto) => {
      const matchNumber = this.getMatchNumber(lotto.numbers, this.#winningLotto.numbers);

      if (matchNumber.length === 6) {
        this.#rank[0]++;
      }
      if (matchNumber.length === 5 && lotto.numbers.includes(this.#winningLotto.bonusNumber)) {
        this.#rank[1]++;
      }
      if (matchNumber.length === 5 && !lotto.numbers.includes(this.#winningLotto.bonusNumber)) {
        this.#rank[2]++;
      }
      if (matchNumber.length === 4) {
        this.#rank[3]++;
      }
      if (matchNumber.length === 3) {
        this.#rank[4]++;
      }
    });
  }

  getPrizeMoney() {
    const prize = [2000000000, 30000000, 1500000, 50000, 5000];

    return this.#rank.reduce((acc, currentRank, idx) => {
      return acc + currentRank * prize[idx];
    }, 0);
  }

  printRateOfReturn() {
    const purchaseAmount = this.#lottos.length * 1000;
    const prizeMoney = this.getPrizeMoney();

    const rateOfReturn = Math.round((prizeMoney / purchaseAmount) * 1000) / 10;
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  printRank() {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.#rank[4]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.#rank[3]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.#rank[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#rank[1]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.#rank[0]}개`);
  }

  print() {
    MissionUtils.Console.print("\n당첨 통계");
    MissionUtils.Console.print("---");
    this.printRank();
    this.printRateOfReturn();
  }
}

module.exports = WinningCalculator;
