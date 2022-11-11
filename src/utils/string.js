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
  PAYMENT_VAL: "[ERROR] 구입 금액은 1000 원 단위의 숫자여야 합니다.",
};

const paymentMsg = (ticket) => {
  return `${ticket}개를 구매했습니다.`;
};

const LOTTO = {
  START: 1,
  END: 45,
  COUNT: 6,
};

const RANK = {
  3: "FIFTH",
  4: "FOURTH",
  // 5: "THIRD" | "SECOND",
  6: "FIRST",
};
const PRIZE = {
  FIFTH: 5000,
  FOURTH: 50000,
  THIRD: 1500000,
  SECOND: 30000000,
  FIRST: 2000000000,
};
const MATCH = {
  FIFTH: 3,
  FOURTH: 4,
  THIRD: 5,
  SECOND: 5,
  FIRST: 6,
};
// const PRIZE = {
//   3: 5000,
//   4: 50000,
//   5: 1500000,
//   5.5: 30000000,
//   6: 2000000000,
// };
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

exports.INPUT_MSG = INPUT_MSG;
exports.ERROR_MSG = ERROR_MSG;
exports.paymentMsg = paymentMsg;
exports.prizeMsg = prizeMsg;
exports.yieldMsg = yieldMsg;
exports.toCurrencyFormat = toCurrencyFormat;
exports.LOTTO = LOTTO;
exports.RANK = RANK;
exports.PRIZE = PRIZE;
