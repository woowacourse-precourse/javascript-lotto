class LottoResult {
  constructor() {}

  checkEachLottoNumber(publishedLotto, winningNumber) {
    const matchedNumberList = [];

    publishedLotto.forEach((eachUserLottoNumber) => {
      matchedNumberList.push(this.getMatchNumberList(winningNumber, eachUserLottoNumber).length);
    });
  }

  getMatchNumberList(winningNumber, eachUserLottoNumber) {
    return winningNumber.filter((number) => eachUserLottoNumber.includes(number));
  }
}

module.exports = LottoResult;
