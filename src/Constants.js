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
    ERR_WINNUM_NOT_SIX_NUMS: "[ERROR] 로또 번호는 6개여야 합니다.",
    ERR_WINNUM_DUPLICATES: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
    ERR_WINNUM_NOT_BETWEEN_ONETOFOURTYFIVE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
    ERR_WINNUM_NOT_INT: "[ERROR] 로또 번호는 정수여야 합니다.",
    ERR_BONUSNUM_NOT_ONE_NUM: "[ERROR] 보너스 번호는 1개여야 합니다.",
    ERR_BONUSNUM_NOT_BETWEEN_ONETOFOURTYFIVE: "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
    ERR_BONUSNUM_NOT_INT: "[ERROR] 보너스 번호는 정수여야 합니다.",
    ERR_BONUSNUM_DUPLICATES: "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
    ERR_PAYNUM_NOT_INT: "[ERROR] 구매 금액은 정수여야 합니다.",
    ERR_PAYNUM_NOT_MULTIPLE_OF_THOUSAND: "[ERROR] 구매 금액은 1000원 단위여야 합니다.",
    ERR_PAYNUM_NOT_POSITIVE: "[ERROR] 구매 금액은 0 이상이어야 합니다.",
};

module.exports = {
    LOTTO_NUMBER,
    PRIZE_UNITS,
    ROUND_OFF,
    MESSAGES,
};