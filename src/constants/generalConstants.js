/**
 * 전체적으로 쓰이는 상수
 * @type {Readonly<{THIRD_PRIZE: number, SINGLE_LOTTO_PRICE: number, SECOND_PRIZE: number, FIFTH_PRIZE: number, FOURTH_PRIZE: number, FIRST_PRIZE: number}>}
 */
const generalConstants = Object.freeze({
  SINGLE_LOTTO_PRICE: 1000,

  FIFTH_PRIZE: 5000,
  FOURTH_PRIZE: 50000,
  THIRD_PRIZE: 1500000,
  SECOND_PRIZE: 30000000,
  FIRST_PRIZE: 2000000000,
});

module.exports = generalConstants;
