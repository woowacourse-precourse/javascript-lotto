const MATCH = Object.freeze({
  SIX: 6,
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
});

const RANK = Object.freeze({
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
  ARRAY: [this.FIRST, this.SECOND, this.THIRD, this.FOURTH, this.FIFTH],
});

module.exports = { MATCH, PRIZE, RANK };
