class Compare {
  #lottoList;
  #winningNumbers;
  #bonusNumber;
  constructor(lottoList, winningNumbers, bonusNumber) {
    this.#lottoList = lottoList;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.compare();
  }

  compare() {
    this.#lottoList.forEach((line) => {
      const countList = { winningNumbers: 0, bonusNumber: 0 };
      line.forEach((number) => {
        this.count(number, countList);
      });
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
}

module.exports = Compare;
