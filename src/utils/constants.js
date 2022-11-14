const MESSAGE = Object.freeze({
  PURCHASE_AMOUT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  PRINT_RANK_TITLE: '\n당첨 통계',
  THREE_MATCHES: '3개 일치 (5,000원) - ',
  FOUR_MATCHES: '4개 일치 (50,000원) - ',
  FIVE_MATCHES: '5개 일치 (1,500,000원) - ',
  FIVE_BONUS_MATCHES: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  SIX_MATCHES: '6개 일치 (2,000,000,000원) - ',
});

const PRIZE_MONEY = [2000000000, 30000000, 1500000, 50000, 5000];

module.exports = { MESSAGE, PRIZE_MONEY };
