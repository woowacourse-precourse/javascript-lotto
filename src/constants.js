const INPUT_MESSAGE = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const PRINT_MESSAGE = {
  LOTTO_COUNT: '개를 구매했습니다.',
};

const ERROR = '[ERROR]';

const ERROR_MESSAGE = {
  PURCHASE_AMOUNT_UNIT: `${ERROR} 구입 금액은 1,000원 단위여야 합니다.`,
  LOTTO_LENGTH: `${ERROR} 로또 번호는 6개여야 합니다.`,
  NUMBER_COMMA: `${ERROR} 로또 번호는 숫자와 쉼표(,)만을 사용하여 입력해야 합니다.`,
  OUT_OF_RANGE: `${ERROR} 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  DUPLICATE_NUMBER: `${ERROR} 로또 번호는 중복되지 않는 숫자여야 합니다.`,
};

module.exports = {
  INPUT_MESSAGE,
  PRINT_MESSAGE,
  ERROR_MESSAGE,
};
