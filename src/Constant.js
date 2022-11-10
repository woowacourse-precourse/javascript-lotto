const QUERY = Object.freeze({
  HOW_MUCH_BUY: "구입금액을 입력해 주세요.\n",
  WIN_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
});

const ERROR = "[ERROR]";

const ERROR_MESSAGE = Object.freeze({
  ONLY_MULTIPLE_OF_1000: `${ERROR} 1,000원 단위로만 입력이 가능합니다.`,
  ONLY_NUMBER_AND_COMMA: `${ERROR} 숫자와 쉼표(,)만 입력이 가능합니다.`,
  LOTTO_LENGTH_MUST_6: `${ERROR} 6개의 숫자를 입력해주세요.`,
  LOTTO_RANGE_MUST_1_TO_45: `${ERROR} 로또 번호의 숫자 범위는 1~45입니다.`,
  ONLY_NUMBER: `${ERROR} 숫자만 입력이 가능합니다.`,
  NO_DUPLICATE_NUMBER: `${ERROR} 로또 번호는 중복되지 않아야 합니다.`,
});

module.exports = {
  QUERY,
  ERROR_MESSAGE,
};
