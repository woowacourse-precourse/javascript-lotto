const ERROR_MESSAGE = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 숫자가 아닙니다.',
  NOT_ENOUGH_MONEY: '[ERROR] 구입 금액은 1,000원 이상이어야 합니다.',
  NOT_DIVIDED_BY_THOUSNAD: '[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.',
  NOT_SIX_NUMBERS: '[ERROR] 로또 번호는 6개의 숫자로 이루어져야 합니다.',
  OUT_OF_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  NOT_UNIQUE_NUMBER: '[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.',
  NOT_UNIQUE_BONUS_NUMBER: '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.'
});
const INVALID_INPUT_ERROR = Object.freeze({
  TITLE: 'Invalid Input',
  MESSAGE: '[ERROR] 유효하지 않은 입력입니다.'
});

module.exports = {
  ERROR_MESSAGE,
  INVALID_INPUT_ERROR
};
