const WINNING_AMOUNT = {
  1: '2,000,000,000',
  2: '30,000,000',
  3: '1,500,000',
  4: '50,000',
  5: '5,000',
};

const INPUT_MESSAGES = {
  AMOUNT: '구입금액을 입력해 주세요.',
  WINNER_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const OUTPUT_MESSAGES = {
  WIN_STATS: `당첨 통계
  ---
  `,
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

const ERROR = '[ERROR]';
const ERROR_MESSAGES = {
  INVALID_MONEY: `${ERROR} 1,000으로 나누어 떨어지지 않는 값은 입력할 수 없습니다.`,
  INVALID_PURCHASE: `${ERROR} 0 또는 0보다 작은 값은 입력할 수 없습니다.`,
  INVALID_INPUT: `${ERROR} 숫자가 아닌 값은 입력할 수 없습니다.`,
  INVALID_SEPARATOR: `${ERROR} 각 숫자는 쉼표(,)로만 구분할 수 있습니다.`,
  INVALID_LOTTO_NUMBER_RANGE: `${ERROR} 로또 번호는 1부터 45까지만 입력할 수 있습니다.`,
  INVALID_LOTTO_COUNT: `${ERROR} 로또 번호는 6개를 입력해야 합니다. (6개 미만 또는 6개 초과)`,
  INVALID_BONUS_NUMBER_COUNT: `${ERROR} 보너스 번호는 반드시 1개 입력해야 합니다. (1개 초과 또는 미입력)`,
  DUPLICATE_NUMBER: `${ERROR} 중복된 숫자는 포함할 수 없습니다.`,
};

module.exports = {
  WINNING_AMOUNT,
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  ERROR_MESSAGES,
};
