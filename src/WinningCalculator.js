const MissionUtils = require("@woowacourse/mission-utils");

class WinningCalculator {
  #getMatchNumber(playerNumbers, winningNumbers) {
    return playerNumbers.filter((number) => winningNumbers.includes(number));
  }

  #getRankIndex(playerNumbers, winningNumbers, bonusNumber) {
    const matchNumber = this.#getMatchNumber(playerNumbers, winningNumbers);

    if (matchNumber.length === 6) {
      return 0;
    }
    if (matchNumber.length === 5 && playerNumbers.includes(bonusNumber)) {
      return 1;
    }
    if (matchNumber.length === 5 && !playerNumbers.includes(bonusNumber)) {
      return 2;
    }
    if (matchNumber.length === 4) {
      return 3;
    }
    if (matchNumber.length === 3) {
      return 4;
    }
  }

  getRankCount(playerLottos, winningLotto) {
    const rankCount = Array(5).fill(0);

    playerLottos.forEach((lotto) => {
      const rankIndex = this.#getRankIndex(lotto.numbers, winningLotto.numbers, winningLotto.bonusNumber);
      rankCount[rankIndex]++;
    });

    return rankCount;
  }

  #getPurchaseAmount(lottos) {
    return lottos.length * 1000;
  }

  #getPrizeMoney(rank) {
    const prize = [2000000000, 30000000, 1500000, 50000, 5000];

    return rank.reduce((acc, currentRank, idx) => {
      return acc + currentRank * prize[idx];
    }, 0);
  }

  getRateOfReturn(lottos, rank) {
    const purchaseAmount = this.#getPurchaseAmount(lottos);
    const prizeMoney = this.#getPrizeMoney(rank);

    return Math.round((prizeMoney / purchaseAmount) * 1000) / 10;
  }

  printRateOfReturn(rateOfReturn) {
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  printRank(rankCountArray) {
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
