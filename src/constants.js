const MESSAGE = Object.freeze({
  PURCHASE_QUESTION: '구입금액을 입력해 주세요.',
  PURCHASE_RESULT: '개를 구매했습니다.',
  WINNING_QUESTION: '당첨 번호를 입력해 주세요.',
  BONUS_QUESTION: '보너스 번호를 입력해 주세요.',
});

const LOTTO_BASE = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  SIZE: 6,
});

const LOTTO_RANKINGS = Object.freeze({
  FIFTH: 5,
  FOURTH: 4,
  THIRD: 3,
  SECOND: 2,
  FIRST: 1,
});

const LOTTO_RESULT_MESSAGES = Object.freeze({
  [LOTTO_RANKINGS.FIFTH]: '3개 일치',
  [LOTTO_RANKINGS.FOURTH]: '4개 일치',
  [LOTTO_RANKINGS.THIRD]: '5개 일치',
  [LOTTO_RANKINGS.SECOND]: '5개 일치, 보너스 볼 일치',
  [LOTTO_RANKINGS.FIRST]: '6개 일치',
});

const LOTTO_PRIZES = Object.freeze({
  [LOTTO_RANKINGS.FIFTH]: 5_000,
  [LOTTO_RANKINGS.FOURTH]: 50_000,
  [LOTTO_RANKINGS.THIRD]: 1_500_000,
  [LOTTO_RANKINGS.SECOND]: 30_000_000,
  [LOTTO_RANKINGS.FIRST]: 2_000_000_000,
});

module.exports = {
  MESSAGE,
  LOTTO_BASE,
  LOTTO_RANKINGS,
  LOTTO_RESULT_MESSAGES,
  LOTTO_PRIZES,
};
