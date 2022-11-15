const GAME_PROGRESS_MESSAGES = Object.freeze({
  ENTER_AMOUNT: '구입금액을 입력해 주세요.',
  USER_AMOUNT_INPUT: '개를 구매했습니다.',
  ENTER_WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
});

const LOTTO_ERROR_MESSAGES = Object.freeze({
  LENGTH_ONLY_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
  UNIQUE: '[ERROR] 번호는 중복되지 않아야 합니다',
});

const UNIT_INVALID_ERROR_MESSAGES = '[ERROR] 1000원 단위로 입력해주세요';

const COMMON_INVALID_ERROR_MESSAGES = Object.freeze({
  ONLY_NUMBER: '[ERROR] 숫자 만 입력 가능합니다.',
  ONLY_NUMBER_BETWEEN_1_45: '[ERROR] 1~45까지의 숫자만 입력가능합니다',
  NOT_DECIMAL_AND_MINUS: '[ERROR] 소수와 음수는 입력 불가능 합니다.',
  NOT_EMPTY: '[ERROR] 공백은 입력할 수 없습니다.',
});

const LOTTO_NUMBER_RANGE = Object.freeze({
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  LENGTH: 6,
  UNIT: 1000,
});

const WINNING_NUMBER_UNITS = Object.freeze({
  FIRST_PLACE: '6개',
  SECOND_PLACE: '5개+ 보너스 볼',
  THIRD_PLACE: '5개',
  FOURTH_PLACE: '4개',
  FIFTH_PLACE: '3개',
});

const WINNING_AMOUNT_UNITS = Object.freeze({
  FIRST_PLACE: 2000000000,
  SECOND_PLACE: 30000000,
  THIRD_PLACE: 1500000,
  FOURTH_PLACE: 50000,
  FIFTH_PLACE: 5000,
});

module.exports = {
  WINNING_AMOUNT_UNITS,
  WINNING_NUMBER_UNITS,
  LOTTO_ERROR_MESSAGES,
  GAME_PROGRESS_MESSAGES,
  COMMON_INVALID_ERROR_MESSAGES,
  LOTTO_NUMBER_RANGE,
  UNIT_INVALID_ERROR_MESSAGES,
};
