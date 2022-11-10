const ERROR = "[ERROR]";

const ERROR_MESSAGE = {
  HAS_REPEAT: `${ERROR} 로또 번호는 중복되는 수가 들어갈 수 없습니다.`,
  WRONG_QUANTITY: `${ERROR} 로또 번호는 6개여야 합니다.`,
  NOT_IN_RANGE: `${ERROR} 로또 번호는 1부터 45사이의 수여야 합니다.`,
  WRONG_MONEY: `${ERROR}1000원 단위로 입력해야 합니다.`,
};

const INPUT_MESSAGE = {
  MONEY: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

const RESULT_MEESAGE = {
  PURCHASE: "N개를 구매했습니다.",
  LOTTERY_RESULT: "당첨 통계\n---",
  PROFIT: "총 수익률은 N%입니다.",
};

const UNIT = {
  MONEY: 1000,
};

const PRIZE_MONEY = {
  3: 5000,
  4: 50000,
  5: 15000000,
  5.5: 30000000,
  6: 2000000000,
};

module.exports = {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  RESULT_MEESAGE,
  UNIT,
  PRIZE_MONEY,
};
