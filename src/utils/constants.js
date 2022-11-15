const VALUE_NUMBER = {
  FIRST_LOTTO_NUMBER: 1,
  LAST_LOTTO_NUMBER: 45,
  TOTAL_LOTTO_NUMBERS: 6,
  MONEY_FOR_ONE_GAME: 1000,

  REQUIRED_MATCHES_1ST_PRIZE: 6,
  REQUIRED_MATCHES_2ND_PRIZE: 5,
  REQUIRED_MATCHES_3RD_PRIZE: 5,
  REQUIRED_MATCHES_4TH_PRIZE: 4,
  REQUIRED_MATCHES_5TH_PRIZE: 3,

  PRIZES: [2000000000, 30000000, 1500000, 50000, 5000],
};
Object.freeze(VALUE_NUMBER);

const GRADE = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
};
Object.freeze(GRADE);

const ERROR_INPUT = {
  NOT_NUMBER: "[ERROR] 숫자를 입력해 주세요.",
  UNDER_FOUR_LETTERS: "[ERROR] 4자리 이상의 숫자를 입력해 주세요.",
  NOT_THOUSAND_UNIT: "[ERROR] 1000원 단위의 금액을 입력해 주세요.",
  BONUS_NUMBER_NOT_NATURAL_NUMBER: "[ERROR] 1-45 사이의 자연수를 입력해주세요.",
  BONUS_NUMBER_OUT_OF_RANGE: "[ERROR] 보너스 숫자는 1-45 사이의 수여야 합니다.",
  BONUS_NUMBER_DUPLICATE: "[ERROR] 이전에 입력한 번호가 보너스 숫자와 중복됩니다.",
  WINNING_NUMBER_IS_NOT_VALID: "[ERROR] 숫자+',' 형태로 입력해 주세요. ex) 1,2,3,4,5,6",
};
Object.freeze(ERROR_INPUT);

const ERROR_LOTTO_NUMBER = {
  NOT_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE_NUMBER: "[ERROR] 중복되는 숫자가 있습니다.",
  OUT_OF_RANGE: "[ERROR] 숫자는 1-45 사이의 수여야 합니다.",
};
Object.freeze(ERROR_LOTTO_NUMBER);

const GET_INPUT = {
  MONEY: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};
Object.freeze(GET_INPUT);

const RESULT = {
  BORDER_LINE: "---",
  TITLE: "\n당첨 통계",
  FIFTH: "3개 일치 (5,000원)",
  FOURTH: "4개 일치 (50,000원)",
  THIRD: "5개 일치 (1,500,000원)",
  SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  FIRST: "6개 일치 (2,000,000,000원)",
};
Object.freeze(RESULT);

module.exports = { VALUE_NUMBER, GRADE, ERROR_INPUT, ERROR_LOTTO_NUMBER, GET_INPUT, RESULT };
