const ERROR_TAG = '[ERROR]';
const NOT_NUMBER_TEMPLATE = `에 숫자가 아닌 문자가 존재합니다.`;
const OUT_OF_BOUND_TEMPLATE = `는 1부터 45까지의 숫자여야 합니다.`;

const ERROR = {
  PURCHASE_AMOUNT: {
    TITLE: `구입 금액`,
    NOT_NUMBER: `${ERROR_TAG} ${TITLE}${NOT_NUMBER_TEMPLATE}`,
    SMALLER: `${ERROR_TAG} ${TITLE}은 1,000원 이상이어야 합니다.`,
    CANNOT_BE_DIVIDED: `${ERROR_TAG} ${TITLE}은 1,000으로 나누어 떨어지는 숫자여야 합니다.`,
  },
  WINNING_NUMBERS: {
    TITLE: `당첨 번호`,
    NOT_NUMBER: `${ERROR_TAG} ${TITLE}${NOT_NUMBER_TEMPLATE}`,
    NOT_LOTTO_LENGTH: `${ERROR_TAG} ${TITLE}의 개수는 로또 번호의 개수와 같아야 합니다.`,
    OUT_OF_BOUND: `${ERROR_TAG} ${TITLE}${OUT_OF_BOUND_TEMPLATE}`,
    DUPLICATE: `${ERROR_TAG} ${TITLE}에 중복된 숫자가 없어야 합니다.`,
  },
  BONUS_NUMBER: {
    TITLE: `보너스 번호`,
    NOT_NUMBER: `${ERROR_TAG} ${TITLE}${NOT_NUMBER_TEMPLATE}`,
    OUT_OF_BOUND: `${ERROR_TAG} ${TITLE}${OUT_OF_BOUND_TEMPLATE}`,
    DUPLICATE: `${ERROR_TAG} ${TITLE}는 이전에 입력한 당첨 번호에 없는 숫자여야 합니다.`,
  },
  LOTTO: {
    TITLE: `로또 번호`,
    NOT_LOTTO_LENGTH: `${ERROR_TAG} ${TITLE}는 6개여야 합니다.`,
    OUT_OF_BOUND: `${ERROR_TAG} ${TITLE}${OUT_OF_BOUND_TEMPLATE}`,
    DUPLICATE: `${ERROR_TAG} ${TITLE}는 중복이 없어야 합니다.`,
  },
};

module.exports = { ERROR };
