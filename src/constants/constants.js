const ERROR_TAG = '[ERROR]';

const ERROR = {
  PURCHASE_AMOUNT: {
    NOT_NUMBER: `${ERROR_TAG} 숫자를 입력해 주세요.`,
    NOT_DIVISIBLE: `${ERROR_TAG} 1,000원 단위의 금액을 입력해 주세요.`,
    LESS: `${ERROR_TAG} 1,000원 이상의 금액을 입력해 주세요.`,
  },
  LOTTO_NUMBER: {
    NOT_LENGTH: `${ERROR_TAG} 로또 번호는 6개여야 합니다.`,
    NOT_NUMBER: `${ERROR_TAG} 로또 번호는 숫자여야 합니다.`,
    NOT_RANGE: `${ERROR_TAG} 로또 번호는 1이상 45이하의 정수여야 합니다.`,
    NOT_UNIQUE: `${ERROR_TAG} 로또 번호는 중복된 숫자가 없어야 합니다.`,
  },
  WINNING_NUMBERS: {
    NOT_LENGTH: `${ERROR_TAG} 당첨 번호는 6개여야 합니다.`,
    NOT_NUMBER: `${ERROR_TAG} 당첨 번호는 숫자여야 합니다.`,
    NOT_RANGE: `${ERROR_TAG} 당첨 번호는 1이상 45이하의 정수여야 합니다.`,
    NOT_UNIQUE: `${ERROR_TAG} 당첨 번호는 중복된 숫자가 없어야 합니다.`,
  },
  BONUS_NUMBER: {
    NOT_NUMBER: `${ERROR_TAG} 보너스 번호는 숫자여야 합니다.`,
    NOT_RANGE: `${ERROR_TAG} 보너스 번호는 1이상 45이하의 정수여야 합니다.`,
    DUPLICATE: `${ERROR_TAG} 보너스 번호는 당첨 번호와 중복이 아닌 숫자여야 합니다.`,
  },
};

module.exports = { ERROR };
