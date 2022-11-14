const LOTTO = Object.freeze({
  PRICE: 1000,
  START_NUMBER: 1,
  END_NUMBER: 45,
  NUMBER_OF_DIGITS: 6,
});

const SYSTEM = Object.freeze({
  JOIN_CHARACTER: ',',
  REWARD: {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
    6: 0,
  },
  RANK: {
    1: 6,
    2: 5,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
  },
  BONUS: {
    1: false,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
  },
});

module.exports = { LOTTO, SYSTEM };
