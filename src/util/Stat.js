class Stat {
  static countWinning(lottos, answer) {
    const results = Array(5).fill(0);
    lottos.forEach((lotto) => {
      const index = this.compareEach(lotto, answer);
      if (index !== undefined) results[index] += 1;
    });
    return results;
  }

  static compareEach(lotto, answer) {
    const bonus = Number(answer.at(-1));
    const count = answer.filter((num) => lotto.includes(num)).length;

    if (count === 3) return 0;
    if (count === 4) return 1;
    if (count === 5 && lotto.indexOf(bonus)) return 3;
    if (count === 5) return 2;
    if (count === 6) return 4;
    return undefined;
  }

  static getROR(profit, principal) {
    return parseFloat(((profit / principal) * 100).toFixed(1));
  }
}

module.exports = Stat;
