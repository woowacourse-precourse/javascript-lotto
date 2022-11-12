class Statistics {
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
    let count = 0;
    count = answer.filter((num) => lotto.includes(num)).length;

    if (count === 5 && lotto.indexOf(bonus)) count = 7;

    const index = this.countToIndex(count);
    return index;
  }

  static countToIndex(count) {
    switch (count) {
    case 3:
      return 0;
    case 4:
      return 1;
    case 5:
      return 2;
    case 7:
      return 3;
    case 6:
      return 4;
    }
  }

  static rateOfReturn(profit, principal) {
    return parseFloat(((profit / principal) * 100).toFixed(1));
  }

}

module.exports = Statistics;
