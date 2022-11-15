const SELECT_ERROR = {
  WINNING_NUMBERS_LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다.',
  WINNIG_NUMBERS_IS_NOT_NUMBER: '[ERROR] 당첨 번호는 숫자여야 합니다.',
  WINNING_NUMBERS_IS_NOT_IN_RANGE: '[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.',
  WINNING_NUMBERS_IS_DUPLICATED: '[ERROR] 당첨 번호는 중복될 수 없습니다.',
  BONUS_NUMBER_IS_DUPLICATED: '[ERROR] 보너스 볼은 당첨 번호와 중복될 수 없습니다.',
  BONUS_NUMBER_IS_NOT_NUMBER: '[ERROR] 보너스 볼은 숫자여야 합니다.',
  BONUS_NUMBER_IS_NOT_IN_RANGE: '[ERROR] 보너스 볼은 1~45 사이의 숫자여야 합니다.',
};

const LOTTO_ERROR = {
  LENGTH_NOT_ENOUGH: '[ERROR] 로또 번호는 6개여야 합니다.',
  IS_NOT_NUMBER: '[ERROR] 로또 번호는 숫자여야 합니다.',
  IS_NOT_IN_RANGE: '[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.',
  IS_DUPLICATED: '[ERROR] 로또 번호는 중복될 수 없습니다.',
};

const CASHER_ERROR = {
  MONEY_IS_NOT_ENOUGH: '[ERROR] 구입금액이 부족합니다.',
  MONEY_IS_NOT_NUMBER: '[ERROR] 구입금액은 숫자여야 합니다.',
  MONEY_HAS_CHAGE_LEFT: '[ERROR] 구입금액에 남은 잔돈이 있습니다.',
};

module.exports = { LOTTO_ERROR, SELECT_ERROR, CASHER_ERROR  };
