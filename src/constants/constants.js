const MESSAGE = {
  MONEY_INPUT: "구입금액을 입력해 주세요.",
  LOTTO_AMOUNT: "개를 구매했습니다.",
  LOTTO_NUMBER_INPUT: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER_INPUT: "당첨 번호를 입력해 주세요.",
  RESULT: "당첨 통계",
};

const RANK_MESSAGE = {
  1: `6개 일치 (2,000,000,000원)`,
  2: `5개 일치, 보너스 볼 일치 (30,000,000원)`,
  3: `5개 일치 (1,500,000원)`,
  4: `4개 일치 (50,000원)`,
  5: `3개 일치 (5,000원)`,
};

const REWARDS = [0, 5000, 50000, 1500000, 30000000, 2000000000];

module.exports = { MESSAGE, RANK_MESSAGE, REWARDS };
