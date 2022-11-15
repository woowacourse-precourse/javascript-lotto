const MISSION_UTILS = require("@woowacourse/mission-utils");
const CONSOLE_UTIL = MISSION_UTILS.Console;
const RANDOM_UTIL = MISSION_UTILS.Random;

const FROM_ONE_TO_FORTYFIVE = Array.from(
  { length: 45 },
  (VOID, index) => index + 1
);

const THOUSAND = 1000;
const SIX = 6;
const ONE = 1;

const ERROR_MESSAGES = {
  NOT_BETWEEN_ONE_AND_FORTYFIVE:
    "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  DUPLICATE: "[ERROR] 중복 숫자가 있습니다. 서로 다른 수를 입력해 주세요.",
  NOT_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
  NOT_MULTIPLES_OF_THOUSAND: "[ERROR] 1,000원 단위로 금액을 입력해 주세요.",
};

const PRIZE_MESSAGES = {
  1: "6개 일치 (2,000,000,000원)",
  2: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  3: "5개 일치 (1,500,000원)",
  4: "4개 일치 (50,000원)",
  5: "3개 일치 (5,000원)",
};

const PRIZE_MONEY = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

const INPUT_MONEY_MESSAGE = "구입금액을 입력해 주세요.\n";
const INPUT_NUMBERS_MESSAGE = "\n당첨 번호를 입력해 주세요.\n";
const INPUT_BONUS_NUMBERS_MESSAGE = "\n보너스 번호를 입력해 주세요.\n";
const NUMBER_OF_TICKETS_MESSAGE = "개를 구매했습니다.";
const RESULT_MESSAGE = "\n당첨 통계\n---";

module.exports = {
  CONSOLE_UTIL,
  RANDOM_UTIL,
  FROM_ONE_TO_FORTYFIVE,
  THOUSAND,
  SIX,
  ONE,
  ERROR_MESSAGES,
  PRIZE_MESSAGES,
  PRIZE_MONEY,
  INPUT_MONEY_MESSAGE,
  INPUT_NUMBERS_MESSAGE,
  INPUT_BONUS_NUMBERS_MESSAGE,
  NUMBER_OF_TICKETS_MESSAGE,
  RESULT_MESSAGE,
};
