const LOTTO_INFO = Object.freeze({
  LOTTO_PRICE: 1000,
  LOTTO_LENGTH: 6,
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THRID_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
});

const GAME_MESSAGES = Object.freeze({
  ASK_TO_PAY: "구입금액을 입력해 주세요.\n",
  ASK_TO_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  ASK_TO_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  RETURN_PURCHASED_AMOUNT: (n) => `${n}개를 구매했습니다.`,
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_COST_UNIT: "[ERROR] 지불 금액은 1,000원 단위만 가능합니다.",
  INVALID_COST_MIN: "[ERROR] 최소 구입금액은 1,000원 입니다.",
  INVALID_COST_TYPE: "[ERROR] 지불 금액은 숫자만 입력 가능합니다.",
  INVALID_LOTTO_RANGE: "[ERROR] 각 로또 번호는 1~45 사이의 숫자여야 합니다.",
  INVALID_LOTTO_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_LOTTO_TYPE: "[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.",
  INVALID_BONUS_RANGE: "[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.",
  INVALID_BONUS_TYPE: "[ERROR] 보너스 번호는 숫자로만 이루어져야 합니다.",
  INVALID_BONUS_LENGTH: "[ERROR] 보너스 번호는 1개여야 합니다.",
  DUPLICATED_BONUS_NUM: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  DUPLICATED_LOTTO_NUM: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  INVALID_LOTTO_AMOUNT:
    "[ERROR] 구입한 로또의 갯수와 생성된 로또 번호의 갯수가 맞는지 확인해 주세요.",
});

const NUMBERS = Object.freeze({
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  CORRECT_LOTTO_LENGTH: 6,
});

const RESULT_MESSAGES = Object.freeze({
  WINNING_STATISTICS: "\n당첨통계\n---",
  TOTAL_PROFIT_RATE: (profit, payment) =>
    `총 수익률은 ${((profit / payment) * 100).toFixed(1)}%입니다.`,
  PRINT_RESULT: (count, match) =>
    `${count[0]}개 일치 (5,000원) - ${match[0]}개
${count[1]}개 일치 (50,000원) - ${match[1]}개
${count[2]}개 일치 (1,500,000원) - ${match[2]}개
${count[3]}개 일치, 보너스 볼 일치 (30,000,000원) - ${match[3]}개
${count[4]}개 일치 (2,000,000,000원) - ${match[4]}개`,
});

module.exports = {
  LOTTO_INFO,
  GAME_MESSAGES,
  ERROR_MESSAGES,
  NUMBERS,
  RESULT_MESSAGES,
};
