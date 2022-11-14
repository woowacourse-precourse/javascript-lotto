const REQUEST = {
  MONEY: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const PRINT = {
  PURCHASE: '개를 구매했습니다.',
  RESULT: {
    HEADER: '\n당첨 통계\n---',
    THREE: '3개 일치 (5,000원) - ',
    FOUR: '4개 일치 (50,000원) - ',
    FIVE: '5개 일치 (1,500,000원) - ',
    FIVE_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    SIX: '6개 일치 (2,000,000,000원) - ',
    UNIT: '개',
  },
  EARNING: {
    HEADER: '총 수익률은 ',
    FOOTER: '%입니다.',
  },
};

module.exports = { REQUEST, PRINT };
