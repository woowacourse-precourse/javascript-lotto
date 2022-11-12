const LOTTO_LENGTH = 6;

const ERROR = {
  NOT_SIX_NUMBERS: "로또 번호는 6개여야 합니다.",
  DUPLICATE_NUMBERS: "중복된 숫자가 있으면 안 됩니다.",
  NOT_DIVIDED_BY_THOUSAND: "1000원 단위로 입력해야합니다.",
  NOT_IN_VAILD_RANGE: "1부터 45 사이의 숫자를 입력해야 합니다.",
};

const MESSEGE = {
  INPUT_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.",
  TELL_PURCHASE_AMOUNT: "개를 구매했습니다.",
  INPUT_WINNING_NUMBER: "당첨 번호를 입력해 주세요.",
};

module.exports = {
  LOTTO_LENGTH,
  ERROR,
  MESSEGE,
};
