const { substractComma } = require('../lib/utils.js')

const LOTTO_PRICE = substractComma('1,000')

const validationError = {
  TYPE: '[ERROR] 구입 금액은 정수여야 합니다.',
  UNIT: `[ERROR] 구입 금액은 ,없이 ${LOTTO_PRICE}원 단위여야 합니다.`,
}

const query = {
  PURCHASE: '구입금액을 입력해 주세요.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
}

module.exports = {
  LOTTO_PRICE,
  validationError,
  query,
}
