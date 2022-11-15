const LOTTO_PRICE_DATA = Object.freeze({
  getThree: { amount: 0, price: 5000 },
  getFour: { amount: 0, price: 50000 },
  getFive: { amount: 0, price: 1500000 },
  getFiveAndBonus: { amount: 0, price: 30000000 },
  getSix: { amount: 0, price: 2000000000 },
});

const STRING = Object.freeze({
  ZERO: '0',
  COMMA: ',',
});

const NUMBER = Object.freeze({
  LOTTO_LENGTH: 6,
  PRICE_UNIT: 1000,
  MIN_LOTTO_RANGE: 1,
  MAX_LOTTO_RANGE: 45,
  DEFAULT_MONEY: 0,
  DEFAULT_TICKET_AMOUT: 0,
  DEFAULT_BONUS_NUMBER: 0,
  DEFAULT_COUNT: 0,
  COUNT_UNIT: 1,
  GET_THREE: 3,
  GET_FOUR: 4,
  GET_FIVE: 5,
  GET_SIX: 6,
  DEFAULT_REVENUE: 0,
  REVENUE_CONSTANT: 1000,
  RATE_CONSTANT: 10,
});

const BOOLEAN = {
  DEFAULT_BONUS: false,
  GET_BONUS: true,
};

const REGEX = Object.freeze({
  NUMBER: /^\d+$/g,
});

module.exports = { LOTTO_PRICE_DATA, STRING, NUMBER, BOOLEAN, REGEX };
