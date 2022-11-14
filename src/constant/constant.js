const REGEXP = {
  CHECK_NUMBER: /^[0-9]*$/,
  CHECK_START_NUMBER: /^0/,
};

const MESSAGE = {
  INPUT_PURCHASING_PRICE: '구입금액을 입력해 주세요.\n',
  NUMBER_OF_LOTTOS_AMOUNT: '개를 구매했습니다.',
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '\n당첨 통계\n---',
  FIFTH: '\n3개 일치 (5,000원) - ',
  FOURTH: '\n4개 일치 (50,000원 - ',
  THIRD: '\n5개 일치 (1,500,000원) - ',
  SECOND: '\n5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIRST: '\n6개 일치 (2,000,000,000원) - ',
  AMOUNT: '개',
};

const ERROR_MESSAGE = {
  ONLY_INPUT_NUMBER: '[ERROR] 구입 금액은 숫자만 입력 가능합니다.',
  MIN_PRICE: '[ERROR] 최소 구입 금액은 1000원 입니다.',
  START_NUMBER_ZERO: '[ERROR] 0으로 시작된 값을 입력할 수 없습니다.',
  INVALID_UNIT: '[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.',
  ONLY_INPUT_INTEGER: '[ERROR] 로또 번호는 정수만 입력 가능합니다.',
  NUMBER_INVALID_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.',
  SIX_NUMBERS_NOT_DUPLICATE: '[ERROR] 로또 번호는 중복되지 않은 6개의 숫자입니다.',
  SAME_LOTTO_NUMBER: '[ERROR] 보너스 번호는 당첨 번호와 같을 수 없습니다.',
};

module.exports = { REGEXP, MESSAGE, ERROR_MESSAGE };
