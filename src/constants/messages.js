const INPUT_MESSAGE = Object.freeze({
  PURCHASE_INPUT: `구입금액을 입력해 주세요.`,
  WINNER_INPUT: `당첨 번호를 입력해 주세요.`,
  BONUS_INPUT: `보너스 번호를 입력해 주세요.`,
});
const ERROR_MESSAGE = Object.freeze({
  CANT_DIVIDE: `[ERROR] 구입 금액이 1000원으로 나누어 떨어지지 않습니다.`,
  NOT_NUMBER: `[ERROR] 입력값이 숫자여야 합니다.`,
  UNDER_BASIC_PRICE: `[ERROR] 구입 금액이 1000 이상이어야 합니다.`,
  NOT_SIX_LENGTH: `[ERROR] 로또 번호는 6개여야 합니다.`,
  IS_OVERLAPPED: `[ERROR] 로또 번호는 중복될 수 없습니다.`,
  NOT_NUMBER_IN_LOTTO: `[ERROR] 로또 번호에는 숫자만 포함될 수 있습니다.`,
  NOT_ASCENDING_ARR: `[ERROR] 로또 번호는 오름차순으로 정렬되어 있어야 합니다.`,
  INVALID_FORMAT_WINNING_NUM: `[ERROR] 당첨 번호는 ,와 숫자로만 이루어져 있어야 합니다.`,
  NOT_RANGE_LOTTO_NUMBER: `[ERROR] 번호는 1 ~ 45 사이의 숫자여야 합니다.`,
  NOT_UNIQUE_BONUS_NUMBER: `[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
});
const PRINT_MESSAGE = Object.freeze({
  PURCHASE_MESSAGE: (num) => `${num}개를 구매했습니다.`,
  START_STATISTICS: `당첨 통계\n ---\n`,
  FIFTH_RANKING_MESSAGE: (num) => `3개 일치 (5,000원) - ${num}개`,
  FOURTH_RANKING_MESSAGE: (num) => `4개 일치 (50,000원) - ${num}개`,
  THIRD_RANKING_MESSAGE: (num) => `5개 일치 (1,500,000원) - ${num}개`,
  SECOND_RANKING_MESSAGE: (num) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${num}개`,
  FIRST_RANKING_MESSAGE: (num) => `6개 일치 (2,000,000,000원) - ${num}개`,
  PRINT_YIELD_MESSAGE: (percent) => `총 수익률은 ${percent}%입니다.`,
});
module.exports = { INPUT_MESSAGE, ERROR_MESSAGE, PRINT_MESSAGE };
