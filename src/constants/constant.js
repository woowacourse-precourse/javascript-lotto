const GAME_START_MESSAGE = "구입금액을 입력해 주세요.\n";
const REQUIRE_WIN_NUMBER_MESSAGE = "당첨 번호를 입력해 주세요.\n";
const REQUIRE_BONUS_NUMBER_MESSAGE = "보너스 번호를 입력해 주세요.\n";

const PURCHACE_MESSAGE = "개를 구매했습니다.";

const ERROR = "[ERROR]";
const ERROR_MESSAGE_INPUT_MONEY = "로또는 천원 단위로 구매할 수 있습니다";
const ERROR_MESSAGE_ONLY_NUMBER = "금액은 숫자만 입력할 수 있습니다";
const ERROR_MESSAGE_DUPLICATED_NUMBER = "중복된 숫자는 입력할 수 없습니다";

const MAX_LOTTO_VALUE = 45;
const MIN_LOTTO_VALUE = 1;

const WON = "원";
const COUNT = "개";

const SIX = {
  rank: "1등",
  condition: "6개 일치",
  price: "2,000,000,000",
  count: 0,
};
const FIFTHBONUS = {
  rank: "2등",
  condition: "5개 일치, 보너스 볼 일치",
  price: "30,000,000",
  count: 0,
};
const FIFTH = {
  rank: "3등",
  condition: "5개 일치",
  price: "1,500,000",
  count: 0,
};
const FORTH = {
  rank: "4등",
  condition: "4개 일치",
  price: "50,000",
  count: 0,
};
const THIRD = {
  rank: "5등",
  condition: "3개 일치",
  price: "5,000",
  count: 0,
};
const RESULT_RANK = {
  THIRD,
  FORTH,
  FIFTH,
  FIFTHBONUS,
  SIX,
};

module.exports = {
  GAME_START_MESSAGE,
  PURCHACE_MESSAGE,
  REQUIRE_WIN_NUMBER_MESSAGE,
  RESULT_RANK,
  THIRD,
  FORTH,
  FIFTH,
  FIFTHBONUS,
  SIX,
  ERROR,
  ERROR_MESSAGE_INPUT_MONEY,
  ERROR_MESSAGE_ONLY_NUMBER,
  ERROR_MESSAGE_DUPLICATED_NUMBER,
  WON,
  COUNT,
  REQUIRE_BONUS_NUMBER_MESSAGE,
  MIN_LOTTO_VALUE,
  MAX_LOTTO_VALUE,
};
