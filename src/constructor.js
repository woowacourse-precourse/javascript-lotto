const LOTTO = {
  MIN: 1,
  MAX: 45,
  LENGTH: 6,
  BONUS_COUNT: 1,
}

const ERROR = {
  PREFIX: "[ERROR]",
  DUPLICATE_NUMBERS: "중복된 숫자가 있습니다.",
  OUT_OF_LOTTO_LENGTH: `로또 번호는 ${LOTTO.LENGTH}개여야 합니다.`,
  ONLY_NUMBER: "숫자만 입력해야합니다.",
  OUT_OF_NUMEBR_RANGE: `${LOTTO.MIN}~${LOTTO.MAX}사이 숫자만 가능합니다.`,
}

const COMMAND = {
  INPUT_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  INPUT_BOUNS_NUMBER: "보너스 번호를 입력해 주세요.\n",
}

module.exports = {
  LOTTO,
  ERROR,
}