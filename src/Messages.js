const {
  LOTTO_NUMBER_LENGTH,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_PRICE,
} = require('./GameConstants');

const MESSAGES = Object.freeze({
  INPUT: {
    PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  },
  OUTPUT: {
    PURCHASE_COUNT: '개를 구매했습니다.',
    WINNING_STATISTICS: '\n당첨 통계\n---',
  },
  ERROR_LOTTO: {
    LENGTH: `[ERROR] 로또 번호는 ${LOTTO_NUMBER_LENGTH}개여야 합니다.`,
    NOT_NUMBER: '[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.',
    NOT_INTEGER: '[ERROR] 로또 번호는 정수로만 이루어져야 합니다.',
    OUT_OF_RANGE: `[ERROR] 로또 번호는 ${LOTTO_MIN_NUMBER}~${LOTTO_MAX_NUMBER}까지의 숫자여야 합니다.`,
    DUPLICATION: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  },
  ERROR_LOTTO_GAME: {
    NOT_NUMBER_AMOUNT: '[ERROR] 숫자만 입력해주세요.',
    MINIMUM_AMOUNT: `[ERROR] 최소 입력 금액은 ${LOTTO_PRICE}원입니다.`,
    UNIT_OF_AMOUNT: '[ERROR] 1,000원 단위로 입력해주세요.',
    NOT_NUMBER_BONUS: '[ERROR] 숫자를 입력해주세요.',
    NOT_INTEGER_BONUS: '[ERROR] 정수를 입력해주세요.',
    OUT_OF_RANGE_BONUS: `[ERROR] 보너스 번호는 ${LOTTO_MIN_NUMBER}~${LOTTO_MAX_NUMBER}까지의 숫자여야 합니다.`,
    DUPLICATION_BONUS: '[ERROR] 당첨 번호와 중복되지 않는 번호를 입력해주세요.',
  },
  PRIZE_MONEY: {
    FIRST: '2,000,000,000',
    SECOND: '30,000,000',
    THIRD: '1,500,000',
    FOURTH: '50,000',
    FIFTH: '5,000',
  },
});

module.exports = MESSAGES;
