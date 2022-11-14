const ERROR_MESSAGES = Object.freeze({
  // 사용자 입력 예외 에러 메세지
  NOT_INPUT_MONEY: '[ERROR] 구입 금액을 입력해 주세요.',
  INVALID_MONEY_UNIT: '[ERROR] 1,000원 단위로 입력해 주세요.',

  INVALID_LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_LOTTO_RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.',
  NOT_DUPLICATE_NUMBER: '[ERROR] 로또 번호는 중복될 수 없습니다.',

  INVALID_BONUS_RANGE: '[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자여야 합니다.',
  NOT_INPUT_BONUS: '[ERROR] 보너스 번호를 입력해 주세요.',

  // 예외 에러 메세지
  EMPTY_NUMBERS: '[ERROR] 랜덤 로또 번호가 생성되지 않았습니다.',
});

const MESSAGES = Object.freeze({
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  BUY_COUNT: (count) => `${count}개를 구매했습니다.`,
  INPUT_LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

module.exports = { ERROR_MESSAGES, MESSAGES };
