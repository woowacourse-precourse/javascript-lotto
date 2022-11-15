const ERROR_MESSAGE = {
  LOTTO_NOT_SIX_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_DO_NOT_OVERLAP: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
  INPUT_MONEY_BE_IN_THOUSANDS: '[ERROR] 1,000원 단위의 금액을 투입해주세요.',
  IS_NOT_A_NUMBER: '[ERROR] 숫자를 입력해주세요.',
  IS_NOT_A_SIX_LENGTH: '[ERROR] 6개의 당첨 번호를 입력해주세요.',
  RANGE_IS_WRONG: '[ERROR] 1부터 45사이의 숫자를 입력해주세요.',
  WINNING_NUMBERS_DO_NOT_OVERLAP: '[ERROR] 당첨 번호를 중복 없이 입력해주세요.',
  BONUS_NUMBER_DO_NOT_OVERLAP: '[ERROR] 당첨 번호와 중복되지 않게 입력해주세요.'  
}

const INPUT_MESSAGE = {
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n'
}

const MESSAGE = {
  BUY_COUNT: '개를 구매했습니다.'
}

const RESULT_MESSAGE = {
  OPENING_MESSAGE: '\n당첨 통계\n---',
  FIRST_PLACE: '6개 일치 (2,000,000,000원) -',
  SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원) -',
  THIRD_PLACE: '5개 일치 (1,500,000원) -',
  FOURTH_PLACE: '4개 일치 (50,000원) -',
  FIFTH_PLACE: '3개 일치 (5,000원) -',
  UNIT: '개', 
  YIELD_FRONT_MESSAGEL: '총 수익률은',
  YIELD_BACK_MESSAGEL: '%입니다.'
}

module.exports = { ERROR_MESSAGE, INPUT_MESSAGE, MESSAGE, RESULT_MESSAGE };
