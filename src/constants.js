const INPUT_MESSAGE = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

const PRINT_MESSAGE = {
  LOTTO_COUNT: '개를 구매했습니다.',
};

const ERROR = '[ERROR]';

const ERROR_MESSAGE = {
  PURCHASE_AMOUNT_UNIT: `${ERROR} 구입 금액은 1,000원 단위여야 합니다.`,
  LOTTO_LENGTH: `${ERROR} 로또 번호는 6개여야 합니다.`,
};
module.exports = {
  INPUT_MESSAGE,
  PRINT_MESSAGE,
  ERROR_MESSAGE,
};
