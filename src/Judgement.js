class Judgement {
  compare(lotto, winning) {
    const lottoCount = [];
    for (let i = 0; i < lotto.length; i++) {
      const matchNumber = lotto[i].filter((num) =>
        winning.includes(num)
      ).length;
      lottoCount.push(matchNumber);
    }
    return lottoCount;
  }

  countLotto(lottoArr) {
    const result = lottoArr.filter((lotto) => 3 <= lotto);
    return result;
  }

  findIndex(lottoCount) {
    const fiveLottoIdx = [];
    lottoCount.forEach((num, idx) => {
      if (num === 5) {
        fiveLottoIdx.push(idx);
      }
    });
    return fiveLottoIdx;
  }

  bonusCompare(lotto, fiveNumIdx, bonus) {
    let bonusCount = 0;
    bonus = +bonus;
    for (let i = 0; i < fiveNumIdx.length; i++) {
      const index = fiveNumIdx[i];
      if (lotto[index].includes(bonus)) {
        bonusCount++;
      }
    }
    return bonusCount;
  }

  createWinningStatistics(bonusResult, winningResult) {
    const result = {
      three: [5000, 0],
      four: [50000, 0],
      five: [1500000, 0],
      fiveBonus: [30000000, 0],
      six: [2000000000, 0]
    };

    for (let i = 0; i < winningResult.length; i++) {
      if (winningResult[i] === 3) {
        result.three[1]++;
      } else if (winningResult[i] === 4) {
        result.four[1]++;
      } else if (winningResult[i] === 5) {
        result.five[1]++;
      } else if (winningResult[i] === 6) {
        result.six[1]++;
      }
    }

    if (bonusResult) {
      result.five[1] = result.five[1] - bonusResult;
      result.fiveBonus[1] += bonusResult;
    }

    return result;
  }

  rateOfReturn(result, purchaseNumber) {
    purchaseNumber = purchaseNumber * 1000;
    let total = [];
    for (const item in result) {
      const money = result[item][0];
      const number = result[item][1];
      total.push(money * number);
    }
    total = total.reduce((a, b) => a + b);
    const rateOfReturn = ((total / purchaseNumber) * 100).toFixed(1);
    return rateOfReturn;
  }
}

module.exports = Judgement;
