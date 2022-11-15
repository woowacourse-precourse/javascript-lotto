const INPUT_MESSAGES = {
  INPUT_BUY_LOTTO: `구매금액을 입력해 주세요.\n`,
  INPUT_WINNING_NUMBER: `당첨 번호를 입력해 주세요.\n`,
  INPUT_BOUNS_NUMBER: `보너스 번호를 입력해 주세요.\n`,
};

const ERROR_PREFIX = '[ERROR]';
const ERROR_MESSAGES = {
  NO_REST_MONEY: `${ERROR_PREFIX} 1,000으로 나누어 떨어지지 않는 값은 입력할 수 없습니다.`,
  NOT_A_NUMBER: `${ERROR_PREFIX} 숫자가 아닌 값은 입력할 수 없습니다.`,
  NEGATIVE_NUMBER: `${ERROR_PREFIX} 음수는 입력할 수 없습니다. `,
  INVALID_INPUT: `${ERROR_PREFIX} 숫자가 아닌 값은 입력할 수 없습니다. (구분자는 ,만 사용 가능)`,
  NO_VALID_LOTTO_LENGTH: `${ERROR_PREFIX} 로또 번호는 6개를 입력해야 합니다. (6개 미만 또는 6개 초과)`,
  NO_VALID_BONUS_NUMBER_LENGTH: `${ERROR_PREFIX} 보너스 번호는 반드시 1개 입력해야 합니다. (1개 초과 또는 미입력)`,
  DUPLICATE_NUMBER: `${ERROR_PREFIX} 중복된 로또 번호가 포함되어 있습니다. (중복 불가)`,
  OVER_THE_MAX: `${ERROR_PREFIX} 최대 구입 가능 금액은 100만원 입니다. 다시 시작하세요. 입력한 금액: `,
  UNDER_THE_MIN: `${ERROR_PREFIX} 최소 구입 가능 금액은 1000원 입니다. 다시 시작하세요. 입력한 금액:`,
};
module.exports = {
  ERROR_MESSAGES,
  INPUT_MESSAGES,
};
