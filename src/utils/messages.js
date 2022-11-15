const message = {
  INPUT_AMOUNT_MESSAGE: '구입금액을 입력해주세요.\n',
  INPUT_LOTTO_NUMBERS_MESSAGE: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER_MESSAGE: '보너스 번호를 입력해 주세요.\n',

  STATISTICS: '당첨 통계',
  DIVIDER: '---',

  FIRST_PRIZE: (number) => {
    return `6개 일치 (2,000,000,000원) - ${number}개`;
  },
  SECOND_PRIZE: (number) => {
    return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`;
  },
  THIRD_PRIZE: (number) => {
    return `5개 일치 (1,500,000원) - ${number}개`;
  },
  FOURTH_PRIZE: (number) => {
    return `4개 일치 (50,000원) - ${number}개`;
  },
  FIFTH_PRIZE: (number) => {
    return `3개 일치 (5,000원) - ${number}개`;
  },
  REVENUE: (revenue) => {
    return `총 수익률은 ${revenue}%입니다.`;
  },

  USER_NUMBERS_LIST_LENGTH: (length) => {
    return `${length}개를 구매했습니다.`;
  },
};

const error = {
  INVALID_INTEGER_ERROR_MESSAGE: '[ERROR] 금액은 정수여야 합니다.',
  INVALID_UNIT_ERROR_MESSAGE: '[ERROR] 금액은 1,000원 단위여야 합니다.',
  DUPLICATE_ERROR_MESSAGE: '[ERROR] 로또 번호에 중복이 있을 수 없습니다.',
  LOTTO_LENGTH_ERROR_MESSAGE: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_BOUND_ERROR_MESSAGE:
    '[ERROR] 로또 번호는 1이상 45 이하의 정수여야 합니다.',
};

module.exports = {
  message,
  error,
};
