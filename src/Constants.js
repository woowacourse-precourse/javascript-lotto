const LOTTO_NUMBER = {
  MIN: 1,
  MAX: 45,
  NUMS: 6,
};

const PRIZE_UNITS = {
  FIVE_THOUSAND: 5000,
  FIFTY_THOUSAND: 50000,
  ONE_POINT_FIVE_MILLION: 1500000,
  THIRTY_MILLION: 30000000,
  TWO_BILLION: 2000000000,
};

const ROUND_OFF = {
    DECIMAL_PLACES: 1,
}

const MESSAGES = {
    ENTER_PAYMENT: "구입금액을 입력해주세요 : \n",
    PURCHASED_AMOUNT: "개를 구매했습니다.",
    ENTER_WINNINGNUM: "\n당첨 번호를 입력해 주세요.\n",
    ENTER_BONUSNUM: "\n보너스 번호를 입력해 주세요.\n",
    THREE_MATCHED: "3개 일치 (5,000원)",
    FOUR_MATCHED: "4개 일치 (50,000원)",
    FIVE_MATCHED: "5개 일치 (1,500,000원)", 
    FIVE_PLUS_BONUS_MATCHED: "5개 일치, 보너스 볼 일치 (30,000,000원)",
    SIX_MATCHED: "6개 일치 (2,000,000,000원)",
    WIN_STATS: "당첨 통계\n",
    EARNING_RATE: "총 수익률은 ",
    PERCENT: "%입니다.",
};

module.exports = {
    LOTTO_NUMBER,
    PRIZE_UNITS,
    ROUND_OFF,
    MESSAGES,
};