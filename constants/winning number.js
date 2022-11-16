const MATCH = Object.freeze({
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
});

const RANK = Object.freeze({
  NONE: -1,
  FIRST: 0,
  SECOND: 1,
  THIRD: 2,
  FOURTH: 3,
  FIFTH: 4,
});

const PRIZE = Object.freeze({
  FIRST: '2,000,000,000',
  SECOND: '30,000,000',
  THIRD: '1,500,000',
  FOURTH: '50,000',
  FIFTH: '5,000',
  ARRAY: [2000000000, 30000000, 1500000, 50000, 5000],
});

module.exports = { MATCH, PRIZE, RANK };
