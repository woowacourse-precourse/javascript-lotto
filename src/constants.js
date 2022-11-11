const HEADER = {
  error: '[ERROR]',
}

const MESSAGES = {
  GAME: {
    requirePurchaseAmount: '구입금액을 입력해 주세요.',
  },
  ERROR: {
    isBlank: `${HEADER.error} 공백이 아닌 값을 입력해주세요!`,
    isNotNumber: `${HEADER.error} 숫자를 입력해주세요!`,
    hasBlank: `${HEADER.error} 공백이 없는 숫자를 입력해주세요!`,
    isNotKilo: `${HEADER.error} 1,000원 단위의 금액을 입력해주세요!`,
  },
}

const PRICE_PER_SHEET = 1000;


exports.MESSAGES = MESSAGES;
exports.PRICE_PER_SHEET = PRICE_PER_SHEET;
