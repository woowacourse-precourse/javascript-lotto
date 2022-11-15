const MESSAGE = {
  USER_BUY_MESSAGE: '구입 금액을 입력해주세요',
  CHECK_VALID_INPUT: /^[0-9]+$/,
  THOUSAND: 1000,
  INPUT_ERROR_MESSAGE: '[ERROR]:1000으로 나누어 떨어지는 숫자를 입력해주세요',
  USER_INIT_INPUT: '',
  USER_NUMBER_LOTTOS: '개를 구매했습니다.',
  FIRST_RANGE: 1,
  LAST_RANGE: 45,
  LOTTO_LENGTH: 6,
  LOTTO_INIT_STR: 'q1w2e3',
  USER_LOTTO_SEPERATOR: ', ',
  LOTTO_SIZE_ERROR: '[ERROR] 로또 번호는 6개여야 합니다. ',
  LOTTO_SAME_NUMBER_ERROR: '[ERROR] 로또 번호는 중복되지 않아야 합니다',
  LOTTO_WIN: '당첨 번호를 입력해 주세요.',
  LOTTO_WIN_SEPERATOR: /,/g,
  LOTTO_BONUS: '보너스 번호를 입력해 주세요.',
  LOTTO_OUT_RANGE_ERROR: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  Three: 3,
  Four: 4,
  Five: 5,
  FiveBonus: 7,
  FiveBonusStr: ', 보너스 볼 일치',
  Six: 6,
  LOTTO_EQUAL_MESSAGE: '개 일치',
  WON: '원',
  YIELD_START_MESSAGE: '총 수익률은 ',
  YIELD_END_MESSAGEL: '입니다.',
};

Object.freeze(MESSAGE);

module.exports = MESSAGE;
