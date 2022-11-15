const LOTTO = {
  PRICE: 1000,
  MIN: 1,
  MAX: 45,
  LENGTH: 6,
};

const QUERY = {
  BUY: "구입금액을 입력해 주세요.\n",
  WINNING: "\n당첨 번호를 입력해 주세요.\n",
  BONUS: "\n보너스 번호를 입력해 주세요.\n",
  STATISTICS: "\n당첨 통계\n---",
}

const ERROR_MESSAGE = {
  NAN: "[ERROR] 숫자만 입력해 주세요.",
  MIN_PRICE: "[ERROR] 로또 가격은 개당 1000원 입니다. ",
  PRICE_UNIT: "[ERROR] 로또 가격은 1000원으로 나누어 떨어져야 합니다.",
  COMMA: "[ERROR] 콤마로 구분된 6자리 숫자로 입력해 주세요.",
  RANGE: "[ERROR] 1 ~ 45 숫자를 입력해 주세요.",
  DUPLICATE: "[ERROR] 중복이 있습니다.",
};

const STATISTICS_MESSAGE = {
  "3": '3개 일치 (5,000원) - ',
  "4": '4개 일치 (50,000원) - ',
  "5": '5개 일치 (1,500,000원) - ',
  "6": '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  "7": '6개 일치 (2,000,000,000원) - ',
}

const WINNING_PRICE_MAP = {
  "3": 5000,
  "4": 50000,
  "5": 1500000,
  "6": 30000000,
  "7": 2000000000,
}

module.exports = {
  LOTTO,
  QUERY,
  ERROR_MESSAGE,
  WINNING_PRICE_MAP,
  STATISTICS_MESSAGE
}