class Prize {
  static FIRST = Object.freeze({
    amount: 2_000_000_000,
    matchCount: 6,
    match(matchCount) {
      return matchCount === 6;
    },
  });

  static SECOND = Object.freeze({
    amount: 30_000_000,
    matchCount: 5,
    match(matchCount, isBonus) {
      return matchCount === 5 && isBonus;
    },
  });

  static THIRD = Object.freeze({
    amount: 1_500_000,
    matchCount: 5,
    match(matchCount, isBonus) {
      return matchCount === 5 && !isBonus;
    },
  });

  static FOURTH = Object.freeze({
    amount: 50_000,
    matchCount: 4,
    match(matchCount) {
      return matchCount === 4;
    },
  });

  static FIFTH = Object.freeze({
    amount: 5_000,
    matchCount: 3,
    match(matchCount) {
      return matchCount === 3;
    },
  });

  static getPrize(matchCount, isBonus) {

  }
}

module.exports = Prize;
