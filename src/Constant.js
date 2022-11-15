const LOTTERY_PRICE = 1000;

const MESSAGE = {
  GET_MONEY: "구입금액을 입력해 주세요.\n",
  GET_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  BOUGHT_LOTTERY: "개를 구매했습니다.",
  GET_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  PROFIT_FRONT: "총 수익률은 ",
  PROFIT_BACK: "%입니다.",
};

const LOTTERY_RESULT = {
  TITLE: "\n당첨 통계\n---",
  UNIT: "개",
  MATCHED_SIX: "6개 일치 (2,000,000,000원) - ",
  MATCHED_FIVE_AND_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  MATCHED_FIVE: "5개 일치 (1,500,000원) - ",
  MATCHED_FOUR: "4개 일치 (50,000원) - ",
  MATCHED_THREE: "3개 일치 (5,000원) - ",
};

const PRIZE_GRADE = {
  FIRST: 4,
  SECOND: 3,
  THIRD: 2,
  FOURTH: 1,
  FIFTH: 0,
};

const PRIZE_PRICE = [5000, 50000, 1500000, 30000000, 2000000000];

const LOTTERY_ERROR = {
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATED: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  INTEGER: "[ERROR] 로또 번호는 정수입니다.",
  RANGE: "[ERROR] 로또 번호의 범위는 1 ~ 45 까지입니다.",
};

const BONUS_NUMBER_ERROR = {
  DUPLICATED: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  INTEGER: "[ERROR] 보너스 번호는 정수입니다.",
  RANGE: "[ERROR] 보너스 번호의 범위는 1 ~ 45 까지입니다.",
};

module.exports = { MESSAGE, LOTTERY_PRICE, LOTTERY_RESULT, PRIZE_GRADE, PRIZE_PRICE, LOTTERY_ERROR, BONUS_NUMBER_ERROR };
