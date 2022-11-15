const INPUT_MESSAGES = {
  PAYMENT_AMOUNT: '구입금액을 입력해 주세요.\n',
  USER_INPUT_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  USER_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const PAYMENT_AMOUNT_MESSAGES = '개를 구매했습니다.';

const WINNING_MESSAGES = {
  THREE_MATCHED: '3개 일치 (5,000원)',
  FOUR_MATCHED: '4개 일치 (50,000원)',
  FIVE_MATCHED: '5개 일치 (1,500,000원)',
  FIVE_BONUS_MATCHED: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  SIX_MATCHED: '6개 일치 (2,000,000,000원)',
};

const COUNT_MATCH_NUMBER = [0, 0, 0, 0, 0];

module.exports = {
  INPUT_MESSAGES, 
  PAYMENT_AMOUNT_MESSAGES,
  WINNING_MESSAGES,
  COUNT_MATCH_NUMBER,
}