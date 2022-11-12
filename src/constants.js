const PRICE_PER_SHEET = 1000;

const LOTTO_LENGTH = 6;

const LOTTO_RANGE = {
  start: 1,
  end: 45,
}

const BONUS_LENGTH = 1;

const PRIZE = {
  3: { ea: 0, winningAmount: 5000 },
  4: { ea: 0, winningAmount: 50000 },
  5: { 
    hasBonus: { ea: 0, winningAmount: 1500000 },
    nonBonus: { ea: 0, winningAmount: 30000000 },    
  },
  6: { ea: 0, winningAmount: 2000000000 },
};

const HEADER = {
  error: '[ERROR]',
}

const MESSAGES = {
  GAME: {
    requirePurchaseAmount: '구입금액을 입력해 주세요.',
    requireLottoNumbers: '당첨 번호를 입력해 주세요.',
    requireBonusNumbers: '보너스 번호를 입력해 주세요.',

    buySheets: '개를 구매했습니다.',
  },
  ERROR: {
    isBlank: `${HEADER.error} 공백이 아닌 값을 입력해주세요!`,
    isNotNumber: `${HEADER.error} 숫자를 입력해주세요!`,
    hasBlank: `${HEADER.error} 공백이 없는 숫자를 입력해주세요!`,
    isNotKilo: `${HEADER.error} 1,000원 단위의 금액을 입력해주세요!`,
    isDiffrentLottoLength: `${HEADER.error} ${LOTTO_LENGTH}개의 숫자를 입력해주세요!`,
    isDiffrentBonusLength: `${HEADER.error} ${BONUS_LENGTH}개의 숫자를 입력해주세요!`,
    isNotRange: `${HEADER.error} 1에서 45 사이의 값으로만 입력해주세요!`,
    isDuplicated: `${HEADER.error} 중복되지 않은 값들로 입력해주세요!`,
    isDuplicatedBonus: `${HEADER.error} 당첨 번호와 중복되지 않은 값으로 입력해주세요!`,
  },
}

exports.MESSAGES = MESSAGES;
exports.PRICE_PER_SHEET = PRICE_PER_SHEET;
exports.LOTTO_LENGTH = LOTTO_LENGTH;
exports.BONUS_LENGTH = BONUS_LENGTH;
exports.PRIZE = PRIZE;
exports.LOTTO_RANGE = LOTTO_RANGE;
