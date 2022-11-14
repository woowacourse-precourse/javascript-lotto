class Compare {
  #lottoList;
  #winningNumbers;
  #bonusNumber;
  constructor(lottoList, winningNumbers, bonusNumber) {
    this.#lottoList = lottoList;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.winningStatistics = {
      three: 0,
      four: 0,
      five: 0,
      fiveWithBonus: 0,
      six: 0,
    };
    this.compare();
  }

  compare() {
    this.#lottoList.forEach((line) => {
      const countList = { winningNumbers: 0, bonusNumber: 0 };
      line.forEach((number) => {
        this.count(number, countList);
      });
      this.getWinningStatus(countList);
    });
  }

  count(number, countList) {
    this.countWinningNumbers(number, countList);
    this.countBonusNumber(number, countList);
  }

  countWinningNumbers(number, countList) {
    if (this.#winningNumbers.includes(String(number))) {
      countList.winningNumbers += 1;
    }
  }

  countBonusNumber(number, countList) {
    if (number === parseInt(this.#bonusNumber)) {
      countList.bonusNumber = 1;
    }
  }

  getWinningStatus(countList) {
    if (countList.winningNumbers === 6) {
      this.winningStatistics.six += 1;
    }

    if (countList.winningNumbers === 5 && countList.bonusNumber === 1) {
      this.winningStatistics.fiveWithBonus += 1;
    } else if (countList.winningNumbers === 5) {
      this.winningStatistics.five += 1;
    }

    if (countList.winningNumbers === 4) {
      this.winningStatistics.four += 1;
    }

    if (countList.winningNumbers === 3) {
      this.winningStatistics.three += 1;
    }
  }
}

module.exports = Compare;
