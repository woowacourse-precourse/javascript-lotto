class JudgeLotto {
  compareLotto({ lottos, wins, bonus }) {
    const winAndBonus = [];
    lottos.forEach((lotto) => {
      winAndBonus.push(this.checkWin({ lotto, wins, bonus }));
    });
    return winAndBonus;
  }

  checkWin({ lotto, wins, bonus }) {
    let winCount = 0;
    let isBonus = false;
    wins.forEach((number) => {
      if (lotto.getNumbers().includes(number)) winCount += 1;
    });
    if (winCount === 5) {
      isBonus = this.checkBonus({ lotto, bonus, isBonus });
    }
    return [winCount, isBonus];
  }

  checkBonus({ lotto, bonus, isBonus }) {
    lotto.getNumbers().forEach((number) => {
      if (number === bonus) isBonus = true;
    });
    return isBonus;
  }
}

module.exports = JudgeLotto;
