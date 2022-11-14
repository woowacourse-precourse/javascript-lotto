const LOTTO = {
  PRICE: 1000,
  MIN: 1,
  MAX: 45,
};

const QUERY = {
  BUY: "구입금액을 입력해 주세요.\n",
  WINNING: "\n당첨 번호를 입력해 주세요.\n",
  BONUS: "\n보너스 번호를 입력해 주세요.\n",
}

const ERROR_MESSAGE = {
  NAN: "[ERROR] 숫자만 입력해 주세요.",
  MIN_PRICE: "[ERROR] 로또 가격은 개당 1000원 입니다. ",
  PRICE_UNIT: "[ERROR] 로또 가격은 1000원으로 나누어 떨어져야 합니다.",
  COMMA: "[ERROR] 콤마로 구분된 6자리 숫자로 입력해 주세요.",
  RANGE: "[ERROR] 1 ~ 45 숫자를 입력해 주세요.",
  DUPLICATE: "[ERROR] 중복이 있습니다.",
};

module.exports = {
  LOTTO,
  QUERY,
  ERROR_MESSAGE,
}