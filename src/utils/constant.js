const ERROR_MASSAGE = Object.freeze({
  DIFFERENT_NUMBER: '[ERROR] 서로 다른 6개 번호여야 합니다',
  LOTTO_NUMBER_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  MAX_PURCHASES: '[ERROR] 일주일 최대 구매 금액은 10만원입니다',
  INCORRECT_INPUT: '[ERROR] 금액을 잘 못 입력하셨습니다',
  POSSIBLE_AMOUNT_NUMBER: '[ERROR] 1~9 숫자만 입력가능합니다',
  POSSIBLE_LOTTO_NUMBER: '[ERROR] 1~45의 숫자만 입력가능합니다',
  DUPLICATE_NUMBER: '[ERROR] 당첨번호와 보너스 번호가 일치합니다',
});

const OUTPUT_MESSAGE = Object.freeze({
  ENTER_AMOUNT: '구입금액을 입력해 주세요.\n',
  ENTER_WINNING_NUMBER: '당첨 번홀를 입력해 주세요.\n',
  ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '당첨 통계\n---',
});

const PRIZE_MONEY = Object.freeze({
  FIFTH_RANKING: 5000,
  FORTH_RANKING: 50000,
  THIRD_RANKING: 1500000,
  SECOND_RANKING: 30000000,
  FIRST_RANKING: 2000000000,
});

const RANGKING_COUNT = Object.freeze({
  FIFTH_RANKING_COUNT: 3,
  FORTH_RANKING_COUNT: 4,
  THIRD_RANKING_COUNT: 5,
  SECOND_RANKING_COUNT: 5.5,
  FIRST_RANKING_COUNT: 6,
});

const NUMBER_LIMIT = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  QUANTITY: 6,
  MAX_PURCHASES: 100000,
});

module.exports = {
  ERROR_MASSAGE,
  OUTPUT_MESSAGE,
  PRIZE_MONEY,
  NUMBER_LIMIT,
  RANGKING_COUNT,
};
