const PRIZE = Object.freeze({
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  LOST: -1,
});

const WIN_MONEY = Object.freeze({
  [PRIZE.FIRST]: 2000000000,
  [PRIZE.SECOND]: 30000000,
  [PRIZE.THIRD]: 1500000,
  [PRIZE.FOURTH]: 50000,
  [PRIZE.FIFTH]: 5000,
});

module.exports = { PRIZE, WIN_MONEY };
