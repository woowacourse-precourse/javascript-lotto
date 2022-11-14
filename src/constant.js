const LOTTO_WINNING_AMOUNT = {
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FORTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
};

const RESULT_TXT = {
  TITLE: '\n당첨 통계',
  LINE: '---',
  MATCH_THREE: '3개 일치 (5,000원) - ',
  MATCH_FOUR: '4개 일치 (50,000원) - ',
  MATCH_FIVE: '5개 일치 (1,500,000원) - ',
  MATCH_FIVE_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCH_SIX: '6개 일치 (2,000,000,000원) - ',
};

module.exports = { LOTTO_WINNING_AMOUNT, RESULT_TXT };
