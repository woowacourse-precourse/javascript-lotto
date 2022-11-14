const REGEXP = {
  CHECK_NUMBER: /^[0-9]*$/,
  CHECK_START_NUMBER: /^0/,
};

const MESSAGE = {
  INPUT_PURCHASING_PRICE: '구입금액을 입력해 주세요.\n',
  NUMBER_OF_LOTTOS_AMOUNT: '개를 구매했습니다.',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  WINNING_STATISTICS: '당첨 통계\n---',
  FIFTH: '3개 일치 (5,000원) - ',
  FOURTH: '4개 일치 (50,000원 - ',
  THIRD: '5개 일치 (1,500,000원) - ',
  SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIRST: '6개 일치 (2,000,000,000원) - ',
  AMOUNT: '개',
};

const ERROR_MESSAGE = {
  ONLY_INPUT_NUMBER: '[ERROR] 숫자만 입력 가능합니다.',
  MIN_PRICE: '[ERROR] 최소 구입 금액은 1000원 입니다.',
  START_NUMBER_ZERO: '[ERROR] 구입 금액은 0으로 시작할 수 없습니다.',
  INVALID_UNIT: '[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.',
};

module.exports = { REGEXP, MESSAGE, ERROR_MESSAGE };
