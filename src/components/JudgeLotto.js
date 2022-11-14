class JudgeLotto {
  static compareLotto({ lottos, wins, bonus }) {
    const results = [];
    lottos.forEach((lotto) => {
      results.push(JudgeLotto.#checkWin({ lotto, wins, bonus }));
    });
    return results;
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
    return { win: winCount, bonus: isBonus };
  }

  static #checkBonus({ lotto, bonus, isBonus }) {
    lotto.getNumbers().forEach((number) => {
      if (number === bonus) isBonus = true;
    });
    return isBonus;
  }
}

module.exports = JudgeLotto;
