class Judge {
  static countCorrect(lotto, winnings) {
    return lotto.reduce((cnt, no) => (cnt += winnings.includes(no) ? 1 : 0), 0);
  }
}

module.exports = Judge;
