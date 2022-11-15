const { Random } = require("@woowacourse/mission-utils");

class LottoMachine {
  getRandomNum() {
    const randomArr = Random.pickUniqueNumbersInRange(1, 45, 6);
    this.getRandomNumAscendingSort(randomArr);
    return randomArr;
  }

  getRandomNumAscendingSort(randomArr) {
    randomArr.sort(function (prev, next) {
      return prev - next;
    });
  }

  getLottoQuantity(money) {
    const lottoQuantity = parseInt(money / 1000);
    return lottoQuantity;
  }

  getProfit(equalScore) {
    const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000];

    let sumPrizeMoney = 0;
    for (let i = 0; i < prizeMoney.length; i++) {
      sumPrizeMoney += prizeMoney[i] * equalScore[i];
    }

    return sumPrizeMoney;
  }

  getProfitRate(equalScore, userMoney) {
    const sumPrizeMoney = this.getProfit(equalScore);
    return (sumPrizeMoney / userMoney) * 100;
  }

  getRank(counts) {
    const rank = Array.from({ length: 5 }, () => 0);

    counts.forEach(([winningCount, bonusCount]) => {
      if (winningCount === 6) rank[0] += 1;
      else if (winningCount === 5 && bonusCount === 1) rank[1] += 1;
      else if (winningCount === 5) rank[2] += 1;
      else if (winningCount === 4) rank[3] += 1;
      else if (winningCount === 3) rank[4] += 1;
    });

    return rank;
  }

  compareInputWinNum(userLottoNumbers, winNumArr, bonusNum) {
    const result = [];
    userLottoNumbers.forEach((numbers) => {
      result.push(this.checkOne(numbers, winNumArr, bonusNum));
    });
    return this.getRank(result);
  }

  checkOne(numbers, winNumArr, bonusNum) {
    let winningCount = 0;
    let bonusCount = 0;
    numbers.forEach((number) => {
      if (winNumArr.includes(number)) {
        winningCount += 1;
        return;
      }
      if (number === bonusNum) {
        bonusCount += 1;
      }
    });
    return [winningCount, bonusCount];
  }
}

module.exports = LottoMachine;
