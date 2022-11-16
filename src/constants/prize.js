const PRIZE = Object.freeze({
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  LOST: -1,
});

const WIN_MONEY = Object.freeze({
  [PRIZE.FIRST]: 2_000_000_000,
  [PRIZE.SECOND]: 30_000_000,
  [PRIZE.THIRD]: 1_500_000,
  [PRIZE.FOURTH]: 50_000,
  [PRIZE.FIFTH]: 5_000,
});

module.exports = { PRIZE, WIN_MONEY };
