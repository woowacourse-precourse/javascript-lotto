const RULE = Object.freeze({
  RANGE_START: 1,
  RANGE_END: 45,
  LENGTH: 6,
});

const GAME_MESSAGE = Object.freeze({
  MONEY_INPUT: '구입금액을 입력해 주세요.\n',
  PURCHASE_NUMBER: '개를 구매했습니다.',
  LOTTO_NUMBER_INPUT: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER_INPUT: '보너스 번호를 입력해 주세요.\n',
  RESULT_TITLE: '당첨 통계\n---',
  FIFTH_PLACE: '3개 일치 (5,000원) - ',
  FOURTH_PLACE: '4개 일치 (50,000원) - ',
  THIRD_PLACE: '5개 일치 (1,500,000원) - ',
  SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIRST_PLACE: '6개 일치 (2,000,000,000원) - ',
});

module.exports = { RULE, GAME_MESSAGE };
