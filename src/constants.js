const PRICE_PER_SHEET = 1000;

const LOTTO_LENGTH = 6;

const ROUNDING_DIGIT = 1;

const LOTTO_RANGE = {
  start: 1,
  end: 45,
}

const BONUS_LENGTH = 1;

const PRIZE_TABLE = {
  3: { ea: 0, winningAmount: 5000 },
  4: { ea: 0, winningAmount: 50000 },
  5: { 
    hasBonus: { ea: 0, winningAmount: 30000000},
    nonBonus: { ea: 0, winningAmount: 1500000 },    
  },
  6: { ea: 0, winningAmount: 2000000000 },
};

const HEADER = {
  ERROR: '[ERROR]',
}

const MESSAGES = {
  GAME: {
    REQUIRE_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
    REQUIRE_WINNING_LOTTO_NUMBER: '당첨 번호를 입력해 주세요.',
    REQUIRE_BONUS: '보너스 번호를 입력해 주세요.',

    BUY_SHEET: '개를 구매했습니다.',
    
    RESULT_HEADER: '당첨 통계\n---',
  },
  ERROR: {
    IS_BLANK: `${HEADER.ERROR} 공백이 아닌 값을 입력해주세요!`,
    IS_NOT_NUMBER: `${HEADER.ERROR} 숫자를 입력해주세요!`,
    HAS_BLANK: `${HEADER.ERROR} 공백이 없는 숫자를 입력해주세요!`,
    IS_NOT_KILO: `${HEADER.ERROR} 1,000원 단위의 금액을 입력해주세요!`,
    IS_DEMICAL: `${HEADER.ERROR} 소수가 아닌 정수를 입력해주세요!`,
    IS_DIFFRENT_LOTTO_LENGTH: `${HEADER.ERROR} ${LOTTO_LENGTH}개의 숫자를 입력해주세요!`,
    IS_DIFFRENT_BONUS_LENGTH: `${HEADER.ERROR} ${BONUS_LENGTH}개의 숫자를 입력해주세요!`,
    IS_NOT_RANGE: `${HEADER.ERROR} 1에서 45 사이의 값으로만 입력해주세요!`,
    IS_DUPLICATED: `${HEADER.ERROR} 중복되지 않은 값들로 입력해주세요!`,
    IS_INCLUDED_BONUS: `${HEADER.ERROR} 당첨 번호와 중복되지 않은 값으로 입력해주세요!`,
  },
}

Object.freeze(MESSAGES);
Object.freeze(HEADER);

exports.MESSAGES = MESSAGES;
exports.PRICE_PER_SHEET = PRICE_PER_SHEET;
exports.LOTTO_LENGTH = LOTTO_LENGTH;
exports.BONUS_LENGTH = BONUS_LENGTH;
exports.PRIZE_TABLE = PRIZE_TABLE;
exports.LOTTO_RANGE = LOTTO_RANGE;
exports.ROUNDING_DIGIT = ROUNDING_DIGIT;
