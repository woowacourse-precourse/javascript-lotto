const MESSAGE_ACCORDING_ASK = Object.freeze({
  INPUT_MONEY: "구입 금액을 입력해주세요.\n",
  INPUT_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
});

const MESSAGE_ACCORDING_ACTION = Object.freeze({
  PURCHASED: "개를 구매했습니다.",
  NOTIFY_WINNING: "\n당첨 통계\n---",
});

const MESSAGE_ACCORDING_ERROR = Object.freeze({
  NOT_INPUTTED: "[ERROR] 입력이 없습니다.",
  NOT_POSITIVE_NUMBER: "[ERROR] 양수만 입력해주세요.",
  TYPE: "[ERROR] 숫자만 입력 가능합니다.",
  NOT_THOUSAND_UNIT: "[ERROR] 천원 단위 입력을 해주세요.",

  LOTTO_NOT_LENGTH_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_NOT_NUMBER: "[ERROR] 로또 번호는 숫자여야 합니다.",
  LOTTO_NOT_RANGE: "[ERROR] 로또 번호의 범위는 1~45 입니다.",
  LOTTO_NOT_DUPLICATED: "[ERROR] 로또 번호는 중복되지 않습니다.",

  BONUS_LENGTH_OVER_ONE: "[ERROR] 보너스 번호는 숫자 하나만 입력해주세요.",
  BONUS_TYPE_NOT_NUMBER: "[ERROR] 보너스 번호는 숫자만 입력해주세요.",
  BONUS_ALREADY_EXISTED:
    "[ERROR] 보너스 번호가 이미 존재하는 당첨 번호 입니다.",
  BONUS_OUT_OF_RANGE: "[ERROR] 보너스 번호가 1~45범위를 벗어났습니다.",
});

const MESSAGE_ACCORDING_PRIZE_MONEY = Object.freeze({
  1: "(2,000,000,000원) -",
  2: "(30,000,000원) -",
  3: "(1,500,000원) -",
  4: "(50,000원) -",
  5: "(5,000원) -",
});

const MESSAGE_ACCORDING_CORRECT_COUNT = Object.freeze({
  1: "6개 일치",
  2: "5개 일치, 보너스 볼 일치",
  3: "5개 일치",
  4: "4개 일치",
  5: "3개 일치",
});

const MESSAGE_ACCORDING_INPUT_ACTION = Object.freeze({
  RETURN_EARNING_RATE: (percentage) => `총 수익률은 ${percentage}%입니다.`,
  RETURN_PURCHASED_LENGTH: (size) => `\n${size}개를 구매했습니다.`,
});
module.exports = {
  MESSAGE_ACCORDING_ASK,
  MESSAGE_ACCORDING_ACTION,
  MESSAGE_ACCORDING_ERROR,
  MESSAGE_ACCORDING_CORRECT_COUNT,
  MESSAGE_ACCORDING_PRIZE_MONEY,
  MESSAGE_ACCORDING_INPUT_ACTION,
};
