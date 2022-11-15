const { LOTTO_COST, LOTTO_NUMBER } = require('./Constants');

const NUMBER_ERROR_MESSAGE = {
  numberFormat: '[ERROR] 숫자만 입력 가능합니다.',
  numberRange: '[ERROR] 입력은 0보다 커야 합니다.',
};

const MONEY_ERROR_MESSAGE = {
  moneyMultiple: `[ERROR] 구입 금액은 ${LOTTO_COST.cost}원 단위 입니다.`,
};

const LOTTO_ERROR_MESSAGE = {
  lottoNumberRange: `[ERROR] 로또 숫자의 범위는 ${LOTTO_NUMBER.minimum}부터 ${LOTTO_NUMBER.maximum}까지 입니다.`,
  lottoNumberCount: `[ERROR] 로또 번호는 ${LOTTO_NUMBER.count}개여야 합니다.`,
  lottoOverlap: '[ERROR] 로또 번호에는 중복이 있을 수 없습니다.',
};

const BONUS_NUMBER_ERROR_MESSAGE = {
  bonusNumberOverlap: '[ERROR] 보너스 숫자는 당첨 번호와 중복될 수 없습니다.',
};

module.exports = {
  NUMBER_ERROR_MESSAGE,
  MONEY_ERROR_MESSAGE,
  LOTTO_ERROR_MESSAGE,
  BONUS_NUMBER_ERROR_MESSAGE,
};
