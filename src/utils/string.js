const INPUT_MSG = {
  START_GAME: "구입금액을 입력해 주세요.",
  WINNING_NUMS: "당첨 번호를 입력해 주세요.",
  BONUS_NUMS: "보너스 번호를 입력해 주세요.",
};
const ERROR_MSG = {
  NUMBER_VAL_SIZE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  NUMBER_VAL_TYPE: "[ERROR] 로또 번호는 숫자여야 합니다.",
  NUMBER_VAL_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  NUMBER_VAL_DUPLICATE:
    "[ERROR] 로또 번호에서 중복된 숫자는 허용되지 않습니다.",
  PAYMENT_VAL_NUMBER: "[ERROR] 구입 금액은 숫자여야 합니다.",
  PAYMENT_VAL_UNIT: "[ERROR] 구입 금액은 1000 원 단위여야 합니다.",
};

const paymentMsg = (ticket) => {
  return `${ticket}개를 구매했습니다.`;
};

const LOTTO = {
  START: 1,
  END: 45,
  COUNT: 6,
  PRICE: 1000,
};
const RANK_NAME = {
  FIFTH: "FIFTH",
  FOURTH: "FOURTH",
  THIRD: "THIRD",
  SECOND: "SECOND",
  FIRST: "FIRST",
};
const RANK = {
  3: RANK_NAME.FIFTH,
  4: RANK_NAME.FOURTH,
  // 5: "THIRD" | "SECOND",
  6: RANK_NAME.FIRST,
};
const PRIZE = {
  [RANK_NAME.FIFTH]: 5000,
  [RANK_NAME.FOURTH]: 50000,
  [RANK_NAME.THIRD]: 1500000,
  [RANK_NAME.SECOND]: 30000000,
  [RANK_NAME.FIRST]: 2000000000,
};
const MATCH = {
  [RANK_NAME.FIFTH]: 3,
  [RANK_NAME.FOURTH]: 4,
  [RANK_NAME.THIRD]: 5,
  [RANK_NAME.SECOND]: 5,
  [RANK_NAME.FIRST]: 6,
};
const MATCHING_LOTTO = {
  WINNING: "winning",
  BONUS: "bonus",
};

const toCurrencyFormat = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const prizeMsg = (rank, count) => {
  let prizeStr = toCurrencyFormat(PRIZE[rank]);
  let string = `${MATCH[rank]}개 일치 (${prizeStr}원) - ${count}개`;
  if (rank === "SECOND") {
    return `5개 일치, 보너스 볼 일치 (${prizeStr}원) - ${count}개`;
  }
  return string;
};
const yieldMsg = (money, prize) => {
  return `총 수익률은 ${(prize / money) * 100}%입니다.`;
};
module.exports = {
  INPUT_MSG,
  ERROR_MSG,
  paymentMsg,
  prizeMsg,
  yieldMsg,
  toCurrencyFormat,
  RANK_NAME,
  LOTTO,
  MATCH,
  RANK,
  PRIZE,
  MATCHING_LOTTO,
};
