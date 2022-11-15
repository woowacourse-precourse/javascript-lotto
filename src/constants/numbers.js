const VALUE = {
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  VALID_LOTTO_NUMBER_LENGTH: 6,
  LOTTO_PRICE: 1000
};

const REWARD = {
  SIX_MATCH_REWARD: 2000000000,
  BONUS_MATCH_REWARD: 30000000,
  FIVE_MATCH_REWARD: 1500000,
  FOUR_MATCH_REWARD: 50000,
  THREE_MATCH_REWARD: 5000
};

const ERROR = {
  MONEY_INPUT_NON_NUMBER:
    '[ERROR] 금액 입력 시 숫자 이외에는 입력할 수 없습니다.',
  MONEY_INPUT_NON_INTEGER:
    '[ERROR] 금액 입력 시 소수점 이하는 허용되지 않습니다.',
  MONEY_INPUT_NEGATIVE: '[ERROR] 금액 입력 시 음수를 입력할 수 없습니다.',
  MONEY_INPUT_NON_DIVISIBLE:
    '[ERROR] 금액은 1,000 원 단위로만 입력 가능합니다.',
  LOTTO_NUMBERS_LENGTH_INVALID:
    '[ERROR] 로또 번호는 6자리 숫자로 구성되어야 합니다.',
  LOTTO_NUMBERS_HAVE_NON_NUMBER:
    '[ERROR] 로또 번호는 숫자로만 구성되어야 합니다.',
  LOTTO_NUMBERS_HAVE_INVALID_SIZE_NUMBER:
    '[ERROR] 로또 번호는 1 이상 45 이하의 자연수여야 합니다.',
  LOTTO_NUMBERS_HAVE_DUPLICATE:
    '[ERROR] 로또 번호에 중복된 숫자가 포함되어 있습니다.',
  BONUS_NUMBER_INVALID_INPUT:
    '[ERROR] 보너스 번호는 하나의 숫자만 입력 가능합니다.',
  BONUS_NUMBER_SIZE_INVALID:
    '[ERROR] 보너스 번호는 1 이상 45 이하의 자연수여야 합니다.',
  BONUS_NUMBER_OVERLAPPED:
    '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.'
};

module.exports = {
  VALUE,
  REWARD,
  ERROR
};
