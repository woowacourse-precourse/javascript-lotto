const { LOTTO } = require("./constant");

const MESSAGE = Object.freeze({
  INPUT_AMOUNT: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
});
const ERROR_MESSAGE = Object.freeze({
  LOTTO_NUM_LENGTH: `[ERROR] 로또 번호는 ${LOTTO.NUM_LENGTH}개여야 합니다.`,
  LOTTO_NUM_RANGE: `[ERROR] 로또 번호는 ${LOTTO.NUM_START}~${LOTTO.NUM_LAST} 사이만 가능합니다.`,
  LOTTO_NUM_DUPLICATE: "[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.",
  INPUT_AMOUNT: `[ERROR] 구입 금액은 ${LOTTO.PRICE}원 단위여야 합니다.`,
});

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
};
