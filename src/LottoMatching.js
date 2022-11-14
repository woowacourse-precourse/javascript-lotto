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

  getRateOfReturn(lottoResultObj, lottoCost) {
    let winSum = 0;
    for (let key in lottoResultObj) {
      if (key === '1st') {
        winSum += 2000000000 * lottoResultObj[key];
      }
      if (key === '2nd') {
        winSum += 30000000 * lottoResultObj[key];
      }
      if (key === '3rd') {
        winSum += 1500000 * lottoResultObj[key];
      }
      if (key === '4th') {
        winSum += 50000 * lottoResultObj[key];
      }
      if (key === '5th') {
        winSum += 5000 * lottoResultObj[key];
      }
    }
    const rateOfReturn = winSum / lottoCost * 100;
    return Math.round(rateOfReturn * 100) / 100;
  }
}

module.exports = LottoMatching;
