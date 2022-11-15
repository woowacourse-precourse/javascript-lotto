const INPUT_MESSAGE = {
  MONEY: "구입금액을 입력해 주세요.",
  WINNING_NUMBER: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
};

const ERROR_MESSAGE = {
  UNIT: "[ERROR] 구입 금액은 1000원 단위입니다.",
  POSITIVE_NUMBER: "[ERROR] 0보다 커야합니다.",
  NAN: "[ERROR] 숫자를 입력해주세요.",
  RANGE: "[ERROR] 로또 번호의 숫자 범위는 1~45입니다.",
  LENGHT: "[ERROR] 6개의 값을 입력해주세요.",
  LOTTO_OVERLAP: "[ERROR] 로또 번호는 중복되지 않아야합니다.",
  BONUS_OVERLAP: "[ERROR] 보너스 번호와 로또 번호는 중복되지 않아야합니다.",
};

const RESULT_MESSAGE = {
  PURCHASE: "개를 구매했습니다.",
  DRAW: "\n 당첨 통계 \n---",
};

const LOTTO = {
  MONEY_UNIT: 1000,
  SIZE: 6,
  VALUE_MIN: 1,
  VALUE_MAX: 45,
};

const LOTTO_PRIZE = {
  1: { MONEY: 2000000000, MATCHED: "6개 일치", BONUS: false, count: 0 },
  2: {
    MONEY: 30000000,
    MATCHED: "5개 일치, 보너스 볼 일치",
    BONUS: true,
    count: 0,
  },
  3: { MONEY: 1500000, MATCHED: "5개 일치", BONUS: false, count: 0 },
  4: { MONEY: 50000, MATCHED: "4개 일치", BONUS: false, count: 0 },
  5: { MONEY: 5000, MATCHED: "3개 일치", BONUS: false, count: 0 },
};

module.exports = {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
  LOTTO,
  LOTTO_PRIZE,
};
