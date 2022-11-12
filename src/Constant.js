const QUERY = Object.freeze({
  HOW_MUCH_BUY: "구입금액을 입력해 주세요.\n",
  WIN_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
});

const MESSAGE = Object.freeze({
  BOUGHT_LOTTOS: "개를 구매했습니다.",
});

const ERROR = "[ERROR]";
const ERROR_MESSAGE = Object.freeze({
  LOTTO_LENGTH_6: `${ERROR} 로또 번호는 6개여야 합니다.`,
  LOTTO_DUPLICATE_NUMBER: `${ERROR} 로또 번호는 중복되지 않아야 합니다.`,
  LOTTO_RANGE_FROM_1_TO_45: `${ERROR} 로또 번호의 숫자 범위는 1~45입니다.`,

  INPUT_ONLY_MULTIPLE_OF_1000: `${ERROR} 1,000원 단위로만 입력이 가능합니다.`,
  INPUT_ONLY_NUMBER_AND_COMMA: `${ERROR} 숫자와 쉼표(,)만 입력이 가능합니다.`,
  INPUT_ONLY_NUMBER: `${ERROR} 숫자만 입력이 가능합니다.`,
});

module.exports = {
  QUERY,
  MESSAGE,
  ERROR_MESSAGE,
};
