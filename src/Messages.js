const MESSAGE = {
  GET_MONEY: '구입금액을 입력해 주세요.\n',
  SHOW_AMOUNT: '개를 구매했습니다.',
  GET_NUMBERS: '당첨 번호를 입력해 주세요.',
  GET_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  WINNING_STASTICS: '당첨 통계\n---\n',
  MATCHING_3: '3개 일치 (5,000원) - ',
  MATCHING_4: '4개 일치 (50,000원) - ',
  MATCHING_5: '5개 일치 (1,500,000원) - ',
  MATCHING_5_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCHING_6: '6개 일치 (2,000,000,000원) - ',
  COUNT: '개\n',
  RETURN_RATE: '총 수익률은 ',
  RETURN_RATE_ENDING_WORD: '%입니다.',
  ERROR: {
    NOT_A_NUMBER: '[ERROR]숫자를 입력해주세요.',
    NOT_VALID_MONEY: '[ERROR]1000원 단위의 수를 입력해주세요.',
    NOT_RIGHT_SIZE_AND_DUPLICATED:
      '[ERROR]중복되지 않는 6개의 "숫자"를 입력해주세요.',
    NOT_VALID_RANGE: '[ERROR]1~45 사이의 수만 입력해주세요.',
    DUPLICATED_BONUS_NUM:
      '[ERROR]보너스번호는 기존 6개의 번호와 겹치지 않으며, 숫자형태여야합니다.',
  },
};

module.exports = MESSAGE;
