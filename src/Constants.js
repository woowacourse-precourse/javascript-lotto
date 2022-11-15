const CONSTANT = Object.freeze({
  THREE_MATCHED: 0,
  FOUR_MATCHED: 1,
  FIVE_MATCHED: 2,
  FIVE_BONUS_MATCHED: 3,
  SIX_MATCHED: 4,

  CORRECT: 0,
  BONUS: 1,
});

const PRIZE_MONEY = [5000, 50000, 1500000, 30000000, 2000000000];

const MESSAGE = Object.freeze({
  THREE_MATCHED: '3개 일치 ',
  FOUR_MATCHED: '4개 일치 ',
  FIVE_MATCHED: '5개 일치 ',
  FIVE_BONUS_MATCHED: '5개 일치, 보너스 볼 일치 ',
  SIX_MATCHED: '6개 일치 ',
  PRIZE_RESULT: '당첨 통계\n---',
  ASK_AMOUNT: '구입금액을 입력해 주세요.\n',
  ASK_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  ASK_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  ERROR_SIX_ELEMENT: '[ERROR] 로또 번호는 6개여야 합니다.',
  ERROR_NO_DUPLICATE: '[ERROR] 중복된 번호가 없어야 합니다.',
  ERROR_NO_INTEGER: '[ERROR] 정수를 입력해야 합니다.',
  ERROR_OUT_OF_RANGE: '[ERROR] 1~45 사이 숫자여야 합니다.',
  ERROR_NO_THOUSAND_WON: '[ERROR] 천원 단위로 입력하세요.',
  ERROR_BONUS_IN_NUMS: '[ERROR] 보너스 번호가 당첨번호 안에 있습니다.',
  ERROR_NO_POSITIVE_INT: '[ERROR] 구매금액이 양의 정수여야 합니다.',
});
module.exports = { CONSTANT, PRIZE_MONEY, MESSAGE };
