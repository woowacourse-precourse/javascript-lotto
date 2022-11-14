class LottoMatching {
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
