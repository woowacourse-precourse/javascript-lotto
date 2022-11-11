const LOTTO_ERROR = Object.freeze({
  LEGNTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  SPLIT: '[ERROR] 로또 번호는 쉼표로 구분된 숫자여야 합니다.',
  REPEAT: '[ERROR] 로또 번호는 중복되어서는 안 됩니다.',
  NUMBER: '[ERROR] 로또 번호는 양의 정수여야 합니다.',
  RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.',
});

const BONUS_LOTTO_ERROR = Object.freeze({
  RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.',
  BONUSLENGTH: '[ERROR] 보너스 로또 번호는 1개여야 합니다.',
  INCLUDES: '[ERROR] 보너스 번호와 일치하는 당첨 번호가 있습니다.',
});

const AMOUNt_ERROR = Object.freeze({
  AMOUNT: '[ERROR] 로또는 돈으로 구입 가능합니다',
  UNIT: '[ERROR] 로또 구입은 1000원 단위로 가능합니다',
});

module.exports = { LOTTO_ERROR, BONUS_LOTTO_ERROR, AMOUNt_ERROR };
