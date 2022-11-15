const ERROR = {
  THOUSAND_UNIT: "[ERROR] 구입금액은 1,000원 단위여야 합니다.",
  NOT_NUMBER: "[ERROR] 구입금액과 로또번호는 숫자여야 합니다.",
  BETWEEN_NUMBER: "[ERROR] 로또 번호는 1~45까지의 정수 숫자여야 합니다.",
  LOTTO_NUMBER: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_DUPLICATED: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  BONUS_DUPLICATED: "[ERROR] 보너스 번호는 로또 번호와 중복되지 않아야 합니다.",
};

const TEXT = {
  PURCHASE: "개를 구매했습니다.",
  PAYMENT: "구입금액을 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  WINNING_NUMBER: "당첨번호를 입력해 주세요.\n",
};

const MATCHES = {
  THREE: {
    PRICE: 5000,
    TEXT: `3개 일치 (5,000원)`,
  },
  FOUR: {
    PRICE: 50000,
    TEXT: `4개 일치 (50,000원)`,
  },
  FIVE: {
    PRICE: 1500000,
    TEXT: `5개 일치 (1,500,000원)`,
  },
  FIVE_WITH_BONUS: {
    PRICE: 30000000,
    TEXT: `5개 일치, 보너스 볼 일치 (30,000,000원)`,
  },
  SIX: {
    PRICE: 2000000000,
    TEXT: `6개 일치 (2,000,000,000원)`,
  },
};

module.exports = {
  ERROR,
  TEXT,
  MATCHES,
};
