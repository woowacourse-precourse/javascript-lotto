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

module.exports = {
  MESSAGE,
  LOTTO_BASE,
};
