class JudgeLotto {
  static compareLotto({ lottos, wins, bonus }) {
    const winAndBonus = [];
    lottos.forEach((lotto) => {
      winAndBonus.push(JudgeLotto.#checkWin({ lotto, wins, bonus }));
    });
    return winAndBonus;
  }

  static #checkWin({ lotto, wins, bonus }) {
    let winCount = 0;
    let isBonus = false;
    wins.forEach((number) => {
      if (lotto.getNumbers().includes(number)) winCount += 1;
    });
    if (winCount === 5) {
      isBonus = JudgeLotto.#checkBonus({ lotto, bonus, isBonus });
    }
    return [winCount, isBonus];
  }

  static #checkBonus({ lotto, bonus, isBonus }) {
    lotto.getNumbers().forEach((number) => {
      if (number === bonus) isBonus = true;
    });
    return isBonus;
  }
}

module.exports = JudgeLotto;
