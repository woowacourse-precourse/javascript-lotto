class LottoMatching {
  getResultObj(lottoArr, winNums, bonusNum) {
    const resultObject = {
      '1st': 0,
      '2nd': 0,
      '3rd': 0,
      '4th': 0,
      '5th': 0,
    };
    const lottoResult = this.getMatchResult(lottoArr, winNums, bonusNum);
    lottoResult.map((matchNumsCount) => {
      if (matchNumsCount === 6) {
        resultObject['1st'] += 1;
      }
      if (matchNumsCount === 5.5) {
        resultObject['2nd'] += 1;
      }
      if (matchNumsCount === 5) {
        resultObject['3rd'] += 1;
      }
      if (matchNumsCount === 4) {
        resultObject['4th'] += 1;
      }
      if (matchNumsCount === 3) {
        resultObject['5th'] += 1;
      }
    })
    return resultObject;
  }
  
  getMatchResult(lottoArr, winNums, bonusNum) {
    const winNumsAndBonusNum = winNums.split(',').concat(bonusNum).map(el => +el);
    const correctNumArr = lottoArr.map((lotto) => {
      return lotto.filter(num => winNumsAndBonusNum.includes(num));
    })
    const lottoResult = correctNumArr.map((el) => {
      if (el.length < 6) {
        return el.filter((el) => el !== +bonusNum).length;
      }
      if (el.includes(+bonusNum)) {
        return 5.5;
      }
      return el.length;
    })
    return lottoResult;
  }
}

module.exports = LottoMatching;
