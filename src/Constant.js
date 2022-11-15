const QUERY = Object.freeze({
  HOW_MUCH_BUY: "구입금액을 입력해 주세요.\n",
  WIN_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
});

const MESSAGE = Object.freeze({
  BOUGHT_LOTTOS: "개를 구매했습니다.",
  RESULT: "당첨 통계\n---",
  FIRST: "6개 일치 (2,000,000,000원)",
  SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  THIRD: "5개 일치 (1,500,000원)",
  FOURTH: "4개 일치 (50,000원)",
  FIFTH: "3개 일치 (5,000원)",
  TOTAL_PROFIT_RATE: "총 수익률은",
  PERCENT: "%입니다.",
});

const RANKING = Object.freeze({
  FIRST: "FIRST",
  SECOND: "SECOND",
  THIRD: "THIRD",
  FOURTH: "FOURTH",
  FIFTH: "FIFTH",
});

const PRIZE_MONEY = Object.freeze({
  FIRST: 2_000_000_000,
  SECOND: 30_000_000,
  THIRD: 1_500_000,
  FOURTH: 50_000,
  FIFTH: 5_000,
});

const ERROR = "[ERROR]";

const LOTTO_ERROR_MESSAGE = Object.freeze({
  LENGTH_6: `${ERROR} 로또 번호는 6개여야 합니다.`,
  DUPLICATE_NUMBER: `${ERROR} 로또 번호는 중복되지 않아야 합니다.`,
  RANGE_FROM_1_TO_45: `${ERROR} 로또 번호의 숫자 범위는 1~45입니다.`,
});

const INPUT_ERROR_MESSAGE = Object.freeze({
  ONLY_MULTIPLE_OF_1000: `${ERROR} 1,000원 단위로만 입력이 가능합니다.`,
  ONLY_NUMBER_AND_COMMA: `${ERROR} 숫자와 쉼표(,)만 입력이 가능합니다.`,
  ONLY_NUMBER: `${ERROR} 숫자만 입력이 가능합니다.`,
});

module.exports = {
  QUERY,
  MESSAGE,
  RANKING,
  PRIZE_MONEY,
  LOTTO_ERROR_MESSAGE,
  INPUT_ERROR_MESSAGE,
};
