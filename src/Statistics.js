class Statistics {
  constructor(lottoNumber, buyLottery) {
    [this.lottoNumber, this.bonusLottoNumber] = lottoNumber;
    this.buyLottery = buyLottery;
  }

  showResult() {
    return this.buyLottery
      .map((lottery) => {
        const countNumber = this.compareNumbers(this.lottoNumber, lottery);
        const bonusMatch =
          countNumber === 5 ? this.compareBonusNumber(this.bonusLottoNumber, lottery) : false;
        return [countNumber, bonusMatch];
      })
      .filter(([correctNumber, _]) => correctNumber >= 3);
  }

  compareNumbers(answer, quest) {
    return answer.filter((x) => quest.includes(Number(x))).length;
  }

  compareBonusNumber(answer, quest) {
    return quest.includes(Number(answer)) ? true : false;
  }
}

module.exports = Statistics;
