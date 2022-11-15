const WINNING_AMOUNT = ['5,000', '50,000', '1,500,000', '30,000,000', '2,000,000,000'];

const INPUT_MESSAGES = {
  AMOUNT: '구입금액을 입력해 주세요.',
  WINNER_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const OUTPUT_MESSAGES = {
  WIN_STATS: '당첨 통계\n---',
  BUY(number) {
    return `${number}개를 구매했습니다.`;
  },
  TOTAL(number, amount, totalCount) {
    return `${number}개 일치 (${amount}원) - ${totalCount}개`;
  },
  TOTAL_BONUS(amount, totalCount) {
    return `5개 일치, 보너스 볼 일치 (${amount}원) - ${totalCount}개`;
  },
  TOTAL_PROFIT(percent) {
    return `총 수익률은 ${percent}%입니다.`;
  },
};

const ERROR_PREFIX = '[ERROR]';
const ERROR_MESSAGES = {
  INVALID_REST_MONEY: `${ERROR_PREFIX} 1,000으로 나누어 떨어지지 않는 값은 입력할 수 없습니다.`,
  INVALID_NUMBER: `${ERROR_PREFIX} 숫자가 아닌 값은 입력할 수 없습니다.`,
  INVALID_EMPTY_INPUT: `${ERROR_PREFIX} 미입력 및 공백, 0은 입력할 수 없습니다.`,
  INVALID_NEGATIVE_NUMBER: `${ERROR_PREFIX} 음수는 입력할 수 없습니다. `,
  INVALID_INPUT: `${ERROR_PREFIX} 숫자가 아닌 값은 입력할 수 없습니다. (구분자는 ,만 사용 가능)`,
  INVALID_LOTTO_NUMBER_RANGE: `${ERROR_PREFIX} 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  INVALID_LOTTO_COUNT: `${ERROR_PREFIX} 로또 번호는 6개를 입력해야 합니다. (6개 미만 또는 6개 초과)`,
  INVALID_BONUS_NUMBER_COUNT: `${ERROR_PREFIX} 보너스 번호는 반드시 1개 입력해야 합니다. (1개 초과 또는 미입력)`,
  DUPLICATE_NUMBER: `${ERROR_PREFIX} 중복된 로또 번호가 포함되어 있습니다. (중복 불가)`,
};

module.exports = {
  WINNING_AMOUNT,
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  ERROR_MESSAGES,
};
