const QUESTION = {
  purchase: "구입금액을 입력해 주세요.\n",
  winning_numbers: "당첨 번호를 입력해 주세요.\n",
  bonus_number: "\n보너스 번호를 입력해 주세요.\n",
};

const LOTTO_INFO = {
  price: 1000,
  number_of_numbers: 6,
  number_of_bonus_number: 1,
  min: 1,
  max: 45,
};

const INPUT = {
  amount_form: /^\d+$/,
  number_form: /^\d+(,\d+)*$/,
};

const ERROR = {
  incorrect_form: "[ERROR] 올바르지 않은 형식의 입력입니다.",
  incorrect_purchase_amount: `[ERROR] 구입 금액은 ${LOTTO_INFO.price.toLocaleString()}원 단위이어야 합니다.`,
  incorrect_number_of_lotto_numbers: `[ERROR] 로또 번호는 ${LOTTO_INFO.number_of_numbers}개여야 합니다.`,
  number_out_of_range: `[ERROR] 로또 번호는 ${LOTTO_INFO.min}부터 ${LOTTO_INFO.max} 사이의 숫자여야 합니다.`,
  has_duplicate_number: "[ERROR] 번호들 중에 중복되는 숫자가 있으면 안 됩니다.",
  incorrect_number_of_bonus_number: `[ERROR] 보너스 번호는 ${LOTTO_INFO.number_of_bonus_number}개여야 합니다.`,
};

const RANK_TO_ORDINAL = {
  5: "fifth",
  4: "fourth",
  3: "third",
  2: "second",
  1: "first",
};

const PRIZE = {
  fifth: 5000,
  fourth: 50000,
  third: 1500000,
  second: 30_000_000,
  first: 2_000_000_000,
};

const RESULT = {
  title: "\n당첨 통계\n--\n",
  fifth(result) {
    return `3개 일치 (${PRIZE.fifth.toLocaleString()}원) - ${result}개`;
  },
  fourth(result) {
    return `4개 일치 (${PRIZE.fourth.toLocaleString()}원) - ${result}개`;
  },
  third(result) {
    return `5개 일치 (${PRIZE.third.toLocaleString()}원) - ${result}개`;
  },
  second(result) {
    return `5개 일치, 보너스 볼 일치 (${PRIZE.second.toLocaleString()}원) - ${result}개`;
  },
  first(result) {
    return `6개 일치 (${PRIZE.first.toLocaleString()}원) - ${result}개`;
  },
  profit_rate(rate) {
    return `총 수익률은 ${rate}%입니다.`;
  },
};

module.exports = {
  QUESTION,
  LOTTO_INFO,
  ERROR,
  INPUT,
  RESULT,
  PRIZE,
  RANK_TO_ORDINAL,
};

Object.freeze(RANK_TO_ORDINAL);
