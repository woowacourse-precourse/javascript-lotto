class Prize {
  static NONE = Object.freeze({
    amount: 0,
    matchCount: 3,
    match(matchCount) {
      return Prize.FIFTH.matchCount > matchCount;
    },
  });

  static FIFTH = Object.freeze({
    amount: 5_000,
    matchCount: 3,
    match(matchCount) {
      return Prize.FIFTH.matchCount === matchCount;
    },
  });

  static FOURTH = Object.freeze({
    amount: 50_000,
    matchCount: 4,
    match(matchCount) {
      return Prize.FOURTH.matchCount === matchCount;
    },
  });

  static THIRD = Object.freeze({
    amount: 1_500_000,
    matchCount: 5,
    match(matchCount, isBonus) {
      return Prize.THIRD.matchCount === matchCount && !isBonus;
    },
  });

  static SECOND = Object.freeze({
    amount: 30_000_000,
    matchCount: 5,
    match(matchCount, isBonus) {
      return Prize.SECOND.matchCount === matchCount && isBonus;
    },
  });

  static FIRST = Object.freeze({
    amount: 2_000_000_000,
    matchCount: 6,
    match(matchCount) {
      return Prize.FIRST.matchCount === matchCount;
    },
  });

  static match(matchCount, isBonus) {
    const { values } = Object;
    return values(Prize).find(({ match }) => match(matchCount, isBonus));
  }

  static toString(prize, count) {
    if (prize === Prize.NONE) {
      return '';
    }

    const hasBonusMessage = prize === Prize.SECOND ? ', 보너스 볼 일치' : '';
    const { amount, matchCount } = prize;
    return `${matchCount}개 일치${hasBonusMessage} (${amount.toLocaleString()}원) - ${count}개`;
  }
}

module.exports = Prize;
