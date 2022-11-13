const MissionUtils = require("@woowacourse/mission-utils");

class WinningCalculator {
  getMatchNumber(numbers, winningNumbers) {
    return numbers.filter((number) => winningNumbers.includes(number));
  }

  calculateRank(playerLottos, winningLotto) {
    const rank = Array(5).fill(0);

    playerLottos.map((lotto) => {
      const matchNumber = this.getMatchNumber(lotto.numbers, winningLotto.numbers);

      if (matchNumber.length === 6) {
        rank[0]++;
      }
      if (matchNumber.length === 5 && lotto.numbers.includes(winningLotto.bonusNumber)) {
        rank[1]++;
      }
      if (matchNumber.length === 5 && !lotto.numbers.includes(winningLotto.bonusNumber)) {
        rank[2]++;
      }
      if (matchNumber.length === 4) {
        rank[3]++;
      }
      if (matchNumber.length === 3) {
        rank[4]++;
      }
    });

    return rank;
  }

  getPurchaseAmount(lottos) {
    return lottos.length * 1000;
  }

  getPrizeMoney(rank) {
    const prize = [2000000000, 30000000, 1500000, 50000, 5000];

    return rank.reduce((acc, currentRank, idx) => {
      return acc + currentRank * prize[idx];
    }, 0);
  }

  getRateOfReturn(lottos, rank) {
    const purchaseAmount = this.getPurchaseAmount(lottos);
    const prizeMoney = this.getPrizeMoney(rank);

    return Math.round((prizeMoney / purchaseAmount) * 1000) / 10;
  }

  printRateOfReturn(rateOfReturn) {
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  printRank(rank) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${rank[4]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${rank[3]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${rank[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[1]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${rank[0]}개`);
  }

  print() {
    MissionUtils.Console.print("\n당첨 통계");
    MissionUtils.Console.print("---");
    this.printRank();
    this.printRateOfReturn();
  }
}

module.exports = WinningCalculator;
