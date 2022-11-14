const LOTTO_LENGTH = 6;
const LOTTO_COST = 1000;

const ERROR = {
  NOT_SIX_NUMBERS: "로또 번호는 6개여야 합니다.",
  DUPLICATE_NUMBERS: "중복된 숫자가 있으면 안 됩니다.",
  NOT_DIVIDED_BY_THOUSAND: "1000원 단위로 입력해야합니다.",
  NOT_IN_VAILD_RANGE: "1부터 45 사이의 숫자를 입력해야 합니다.",
  OVERLAP_WITH_NUMBERS: "이미 로또 번호에 있는 숫자입니다.",
};

const MESSEGE = {
  INPUT_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.",
  TELL_PURCHASE_AMOUNT: "개를 구매했습니다.",
  INPUT_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
};

const RESULT = {
  THREE_MATCH: "3개 일치 (5,000원) - ",
  FOUR_MATCH: "4개 일치 (50,000원) - ",
  FIVE_MATCH: "5개 일치 (1,500,000원) - ",
  FIVE_MATCH_WITH_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  SIX_MATCH: "6개 일치 (2,000,000,000원) - ",
  UNIT: "개",
};

const PRIZE = {
  THREE_MATCH: 5000,
  FOUR_MATCH: 50000,
  FIVE_MATCH: 1500000,
  FIVE_MATCH_WITH_BONUS: 30000000,
  SIX_MATCH: 2000000000,
};

module.exports = {
  LOTTO_LENGTH,
  LOTTO_COST,
  ERROR,
  MESSEGE,
  RESULT,
  PRIZE,
};
