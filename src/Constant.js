const GAME_PROGRESS_MESSAGES = Object.freeze({
  ENTER_AMOUNT: '구입금액을 입력해 주세요.',
  USER_AMOUNT_INPUT: '개를 구매했습니다.',
  ENTER_WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
});

const ERROR_MESSAGES = Object.freeze({
  LOTTO_NUMBER_LENGTH_ONLY_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_NUMBER_ONLY_UNIQUE: '[ERROR] 번호는 중복되지 않아야 합니다',
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
  ERROR_MESSAGES,
  GAME_PROGRESS_MESSAGES,
};
