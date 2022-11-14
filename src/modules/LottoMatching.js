class LottoMatching {
  static match(lotto, winNums, bonusNum) {
    const splitWinNums = winNums.split(',').map(num => +num);
    const winNumMatchCount = lotto.filter(num =>
      splitWinNums.includes(num),
    ).length;
    const isBonusMatch = lotto.includes(+bonusNum);
    return [winNumMatchCount, isBonusMatch];
  }

  static getMatchResult(lottoArr, winNums, bonusNum) {
    const lottoResultArr = new Array(6).fill(0);
    lottoArr.map(lotto => {
      const [winNumMatchCount, isBonusMatch] = this.match(
        lotto,
        winNums,
        bonusNum,
      );
      if (winNumMatchCount === 3) lottoResultArr[5] += 1;
      if (winNumMatchCount === 4) lottoResultArr[4] += 1;
      if (winNumMatchCount === 5 && !isBonusMatch) lottoResultArr[3] += 1;
      if (winNumMatchCount === 5 && isBonusMatch) lottoResultArr[2] += 1;
      if (winNumMatchCount === 6) lottoResultArr[1] += 1;
    });
    return lottoResultArr;
  }

  static getRateOfReturn(lottoResultArr, lottoCost) {
    let winSum = 0;
    lottoResultArr.map((rankCount, rank) => {
      if (rank === 1) winSum += 2000000000 * rankCount;
      if (rank === 2) winSum += 30000000 * rankCount;
      if (rank === 3) winSum += 1500000 * rankCount;
      if (rank === 4) winSum += 50000 * rankCount;
      if (rank === 5) winSum += 5000 * rankCount;
    });
    const rateOfReturn = (winSum / lottoCost) * 100;
    return Math.round(rateOfReturn * 100) / 100;
  }
}

module.exports = LottoMatching;
