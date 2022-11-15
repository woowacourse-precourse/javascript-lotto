class Stat {
  constructor(lotto, winNumber, bonus) {
    this.LOTTO = lotto;
    this.WIN_NUM = winNumber;
    this.BONUS = bonus;
  }

  checkBonus(lotto, bonus) {
    if (lotto.includes(parseInt(bonus))) {
      return 2;
    }
  }

  checkRank(count, lotto, bonus) {
    switch (count) {
      case 6:
        return 1;
      case 5:
        return this.checkBonus(lotto, bonus) || 3;
      case 4:
        return 4;
      case 3:
        return 5;
    }
  }

  checkNumber(lotto, winNumber, bonus) {
    let COUNT = 0;
    for (let i = 0; i < lotto.length; i++) {
      if (winNumber.includes(String(lotto[i]))) {
        COUNT += 1;
      }
    }
    return this.checkRank(COUNT, lotto, bonus);
  }
  checkMatch() {
    return this.checkNumber(this.LOTTO, this.WIN_NUM, this.BONUS);
  }
}

module.exports = Stat;
