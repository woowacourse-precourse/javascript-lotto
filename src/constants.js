const PURCHASEAMOUNT_INPUT = "구입금액을 입력해 주세요.";
const WINNERNUMBER_INPUT = "당첨 번호를 입력해 주세요.";
const BONUSNUMBER_INPUT = "보너스 번호를 입력해 주세요.";
const RESULT_GUIDE = "\n당첨 통계\n---";

const PURCHASEAMOUNT_UNDIVIDED =
  "[ERROR] 구입 금액이 로또 가격으로 나누어 떨어지지 않습니다.";
const NOT_ONLY_NUMBER = "[ERROR] 숫자만 입력하실 수 있습니다.";
const NOT_UNIQUE_NUMBER = "[ERROR] 중복된 숫자가 있습니다.";
const SIZE_INVALID = "[ERROR] 로또의 크기는 6 이어야 합니다.";
const NOT_IN_RANGE = "[ERROR] 로또 번호는 1이상 45이하의 숫자만 가능합니다.";
const NOT_EMPTY_INPUT = "[ERROR] 공백을 입력하실 수 없습니다";

const LOTTO_PRICE = 1000;
const LOTTO_SIZE = 6;
const LOTTO_MIN_NUMBER = 1;
const LOTTO_MAX_NUMBER = 45;

const FIRST_RANK = 6;
const THIRD_RANK = 5;
const FOURTH_RANK = 4;
const FIFTH_RANK = 3;

const FIRST = "1등";
const SECOND = "2등";
const THIRD = "3등";
const FOURTH = "4등";
const FIFTH = "5등";
const FAIL = "낙첨";

const GUIDE_MESSAGE = {
  PURCHASEAMOUNT_INPUT,
  WINNERNUMBER_INPUT,
  BONUSNUMBER_INPUT,
  RESULT_GUIDE,
};
const ERROR_MESSAGE = {
  PURCHASEAMOUNT_UNDIVIDED,
  NOT_ONLY_NUMBER,
  NOT_UNIQUE_NUMBER,
  SIZE_INVALID,
  NOT_IN_RANGE,
  NOT_EMPTY_INPUT,
};
const LOTTO_RANKING_CONDITION = {
  FIRST_RANK,
  THIRD_RANK,
  FOURTH_RANK,
  FIFTH_RANK,
};
const LOTTO_RANKING = {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH,
  FAIL,
};
const LOTTO_MONEY = {
  "1등": 2000000000,
  "2등": 30000000,
  "3등": 1500000,
  "4등": 50000,
  "5등": 5000,
  낙첨: 0,
};

module.exports = {
  GUIDE_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_PRICE,
  LOTTO_SIZE,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_RANKING_CONDITION,
  LOTTO_RANKING,
  LOTTO_MONEY,
};
