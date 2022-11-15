/**
 * 전체적으로 쓰이는 상수
 * @type {Readonly<{SINGLE_LOTTO_PRICE: number}>} [로또 1장 가격]
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
