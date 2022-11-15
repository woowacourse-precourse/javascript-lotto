class Judge {
  static countCorrect(lotto, winnings) {
    return lotto.reduce((cnt, no) => (cnt += winnings.includes(no) ? 1 : 0), 0);
  }

  static checkBonus(lotto, bonus) {
    return lotto.includes(bonus);
  }
}

module.exports = Judge;
