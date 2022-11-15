const RULES = Object.freeze({
  LOTTO_PRICE: 1000,
  LOTTO_NUMS: 6,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
});

const ERROR_MESSAGE = Object.freeze({
  NON_NUMERIC_VALUE: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
  INVALID_PRICE_UNIT: '[ERROR] 구입금액은 1000 단위 입니다.',
  ZERO_NUMBER: '[ERROR] 최소금액은 1000원입니다.',
  INVALID_NUMERIC_RANGE: '[ERROR] 로또번호는 1부터 45까지입니다.',
  DUPLICATE_NUMBER: '[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.',
  BONUS_NUMBER_ALREADY_EXISTS: '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
  INVALID_LOTTO_NUMBER: `[ERROR] 로또 번호는 ${RULES.LOTTO_NUMS}개여야 합니다.`,
});

const INFORMATION_MESSAGE = Object.freeze({
  INPUT_PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

const PRINT_MESSAGE = (printValue, printValue2) => {
  return {
    PRINT_INFORMATION_PURCHASED_LOTTO: `${printValue}개를 구매했습니다.`,
    RENDER_LOTTO_NUMBER: `[${printValue}]`,
    RESULT: `당첨 통계`,
    HORIZONTAL_DELIMITER: `---`,
    PROFIT_RATE: `총 수익률은 ${printValue}%입니다.`,
    RANK_PRICE_COUNT: `${printValue}${printValue2}개`,
  };
};

const LOTTO_RANKING_INFORMATION_MESSAGE = Object.freeze({
  '1등': `6개 일치 (2,000,000,000원) - `,
  '2등': `5개 일치, 보너스 볼 일치 (30,000,000원) - `,
  '3등': `5개 일치 (1,500,000원) - `,
  '4등': `4개 일치 (50,000원) - `,
  '5등': `3개 일치 (5,000원) - `,
});

const LOTTO_RANKING_REWARD = Object.freeze({
  '1등': 2_000_000_000,
  '2등': 30_000_000,
  '3등': 1_500_000,
  '4등': 50_000,
  '5등': 5_000,
});

const RANKING_ACCORDING_MATCH_COUNT = Object.freeze({
  6: '1등',
  '5+bonus': '2등',
  5: '3등',
  4: '4등',
  3: '5등',
});

module.exports = {
  RULES,
  ERROR_MESSAGE,
  INFORMATION_MESSAGE,
  PRINT_MESSAGE,
  LOTTO_RANKING_INFORMATION_MESSAGE,
  LOTTO_RANKING_REWARD,
  RANKING_ACCORDING_MATCH_COUNT,
};
