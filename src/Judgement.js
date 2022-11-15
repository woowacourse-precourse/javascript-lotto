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
}

module.exports = Judgement;
