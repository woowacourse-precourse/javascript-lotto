const MESSAGES = {
  INPUT: '구입 금액 입력 ',
  BUY_LOTTO: '개를 구매했습니다.',
  INPUT_WINNER_NUMBER: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const ERROR_MESSAGES = {
  NUMBER_LENGTH_MUST_BE_SIX: '[ERROR] 로또 번호는 6개여야 합니다',
  INPUT_TYPE_MUST_BE_NUBMER: '[ERROR] 입력 금액은 숫자여야 합니다',
  MONEY_MUST_BE_DIVIDED_INTO_1000: '[ERROR] 금액은 1,000원 단위여야 합니다',
};

module.exports = { MESSAGES, ERROR_MESSAGES };
