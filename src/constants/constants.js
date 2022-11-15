const PURCHASE_PRICE_MESSAGE = '구입금액을 입력해 주세요.\n';
const PURCHASE_MESSAGE = `개를 구매했습니다.`;
const WINNING_NUMBER_MESSAGE = '\n당첨 번호를 입력해 주세요.\n';
const BONUS_NUMBER_MESSAGE = '\n보너스 번호를 입력해 주세요.\n';
const STATISTICS = '\n당첨 통계\n---';

const LOTTO_RESULT = Object.freeze({
  THREE: `3개 일치 (5,000원) - `,
  FOUR: `4개 일치 (50,000원) - `,
  FIVE: `5개 일치 (1,500,000원) - `,
  FIVE_BONUS: `5개 일치, 보너스 볼 일치 (30,000,000원) - `,
  SIX: `6개 일치 (2,000,000,000원) - `,
});

const WINNING_AMOUNT = Object.freeze({
  FIRST: 200000000,
  SECOND: 30000000,
  THIRD: 15000000,
  FOURTH: 50000,
  FIFTH: 5000,
});

const LOTTO_PRICE = 1000;

const MY_LOTTO_ERROR = Object.freeze({
  NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
  UNIT: '[ERROR] 구입 금액은 1000단위여야 합니다.',
});

const LOTTO_ERROR = Object.freeze({
  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  NUMBER: '[ERROR] 로또 번호는 숫자여야 합니다.',
  DUPLICATION: '[ERROR] 로또 번호는 중복을 허용하지 않습니다.',
  DOMAIN: '[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다.',
});

const BONUS_ERROR = Object.freeze({
  NUMBER: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  DOMAIN: '[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.',
  DUPLICATION: '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않습니다.',
});

module.exports = {
  PURCHASE_PRICE_MESSAGE,
  PURCHASE_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  BONUS_NUMBER_MESSAGE,
  STATISTICS,
  LOTTO_RESULT,
  WINNING_AMOUNT,
  LOTTO_PRICE,
  MY_LOTTO_ERROR,
  LOTTO_ERROR,
  BONUS_ERROR,
};
