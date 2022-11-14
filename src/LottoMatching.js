class LottoMatching {
  getResultObj(lottoArr, winNums, bonusNum) {
    const resultObject = {
      first : 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    const lottoResult = this.getMatchResult(lottoArr, winNums, bonusNum);
    lottoResult.map((matchNumsCount) => {
      if (matchNumsCount === 6) resultObject[first] += 1;
      if (matchNumsCount === 5.5) resultObject[second] += 1;
      if (matchNumsCount === 5) resultObject[third] += 1;
      if (matchNumsCount === 4) resultObject[fourth] += 1;
      if (matchNumsCount === 3) resultObject[fifth] += 1;
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
      if (key === first) winSum += 2000000000 * lottoResultObj[key];
      if (key === second) winSum += 30000000 * lottoResultObj[key];
      if (key === third) winSum += 1500000 * lottoResultObj[key];
      if (key === fourth) winSum += 50000 * lottoResultObj[key];
      if (key === fifth) winSum += 5000 * lottoResultObj[key];
    }
    const rateOfReturn = winSum / lottoCost * 100;
    return Math.round(rateOfReturn * 100) / 100;
  }
}

module.exports = LottoMatching;
