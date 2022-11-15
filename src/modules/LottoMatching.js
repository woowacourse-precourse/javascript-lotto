const STRING = require('../constant/string');
const { ZERO, GRADE, PRIZE, RANK } = require('../constant/number');

class LottoMatching {
  static match(lotto, winNums, bonusNum) {
    const splitWinNums = winNums.split(STRING.COMMA).map(num => +num);
    const winNumMatchCount = lotto.filter(num =>
      splitWinNums.includes(num),
    ).length;
    const isBonusMatch = lotto.includes(+bonusNum);
    return [winNumMatchCount, isBonusMatch];
  }

  static getMatchResult(lottoArr, winNums, bonusNum) {
    const lottoResultArr = new Array(6).fill(ZERO);
    lottoArr.map(lotto => {
      const [winNumMatchCount, isBonusMatch] = this.match(
        lotto,
        winNums,
        bonusNum,
      );
      if (winNumMatchCount === GRADE.FIFTH) lottoResultArr[RANK.FIFTH] += 1;
      if (winNumMatchCount === GRADE.FOURTH) lottoResultArr[RANK.FOURTH] += 1;
      if (winNumMatchCount === GRADE.THIRD && !isBonusMatch) lottoResultArr[RANK.THIRD] += 1;
      if (winNumMatchCount === GRADE.THIRD && isBonusMatch) lottoResultArr[RANK.SECOND] += 1;
      if (winNumMatchCount === GRADE.FIRST) lottoResultArr[RANK.FIRST] += 1;
    });
    return lottoResultArr;
  }

  static getRateOfReturn(lottoResultArr, lottoCost) {
    let winSum = ZERO;
    lottoResultArr.map((rankCount, rank) => {
      if (rank === RANK.FIRST) winSum += PRIZE.FIRST * rankCount;
      if (rank === RANK.SECOND) winSum += PRIZE.SECOND * rankCount;
      if (rank === RANK.THIRD) winSum += PRIZE.THIRD * rankCount;
      if (rank === RANK.FOURTH) winSum += PRIZE.FOURTH * rankCount;
      if (rank === RANK.FIFTH) winSum += PRIZE.FIFTH * rankCount;
    });
    const rateOfReturn = (winSum / lottoCost) * 100;
    return rateOfReturn.toFixed(1);
  }
}

module.exports = LottoMatching;
