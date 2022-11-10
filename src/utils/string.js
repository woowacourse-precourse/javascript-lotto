const INPUT_MSG = {
  START_GAME: "구입금액을 입력해 주세요.",
  WINNING_NUMS: "당첨 번호를 입력해 주세요.",
  BONUS_NUMS: "보너스 번호를 입력해 주세요.",
};
const ERROR_MSG = {
  NUMBER_VAL_SIZE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  NUMBER_VAL_COUNT: "[ERROR] 로또 번호는 6 개여야 합니다.",
  NUMBER_VAL_DUPLICATE:
    "[ERROR] 로또 번호에서 중복된 숫자는 허용되지 않습니다.",
  PAYMENT_VAL: "[ERROR] 구입 금액은 1000 원 단위여야 합니다.",
};

const paymentMsg = (ticket) => {
  return `${ticket}개를 구매했습니다.`;
};

exports.INPUT_MSG = INPUT_MSG;
exports.ERROR_MSG = ERROR_MSG;
exports.paymentMsg = paymentMsg;
