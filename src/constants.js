const BUY_MESSAGE = Object.freeze({
  BUY: "개를 구매했습니다.",
});

const LOTTO_PRICE = 1000;

const RESULT_MESSAGE = Object.freeze({
  1: "6개 일치 (2,000,000,000원)",
  2: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  3: "5개 일치 (1,500,000원)",
  4: "4개 일치 (50,000원)",
  5: "3개 일치 (5,000원)",
});

const WINNING_AMOUNT = Object.freeze({
  1: 200000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
});

const RANK = Object.freeze({
  60: 1,
  51: 2,
  50: 3,
  40: 4,
  30: 5,
});

module.exports = {
  BUY_MESSAGE,
  LOTTO_PRICE,
  RESULT_MESSAGE,
  WINNING_AMOUNT,
  RANK,
};
