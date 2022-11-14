const { substractComma } = require('../lib/utils.js')

const LOTTO_PRICE = substractComma('1,000')

const validationError = {
  TYPE: '[ERROR] 구입 금액은 정수여야 합니다.',
  UNIT: `[ERROR] 구입 금액은 ,없이 ${LOTTO_PRICE}원 단위여야 합니다.`,
}

const prize = {
  1: {
    PRICE: substractComma('2,000,000,000'),
    CRITERIA: '6개 일치',
  },
  2: {
    PRICE: substractComma('30,000,000'),
    CRITERIA: '5개 일치, 보너스 볼 일치',
  },
  3: {
    PRICE: substractComma('1,500,000'),
    CRITERIA: '5개 일치',
  },
  4: {
    PRICE: substractComma('50,000'),
    CRITERIA: '4개 일치',
  },
  5: {
    PRICE: substractComma('5,000'),
    CRITERIA: '3개 일치',
  },
}

const query = {
  PURCHASE: '구입금액을 입력해 주세요.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
}

module.exports = {
  LOTTO_PRICE,
  validationError,
  prize,
  query,
}
