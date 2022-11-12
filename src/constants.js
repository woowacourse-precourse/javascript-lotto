module.exports = {
  UNIT: 1000,

  Messages: {
    REQUEST_MONEY_INPUT: '구입금액을 입력해 주세요.\n',
    REQUEST_WINNING_NUMBERS_INPUT: '\n당첨 번호를 입력해 주세요.\n',
    REQUEST_BONUS_NUMBER_INPUT: '\n보너스 번호를 입력해 주세요.\n',
    ERROR_MINIMUM_MONEY_INPUT: '[ERROR] 최소 구입금액은 1,000원입니다.',
    ERROR_NUMBER_ONLY: '[ERROR] 구입금액은 숫자만 입력해야 합니다.',
    ERROR_1000_UNITS_ONLY: '[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.',
    ERROR_LOTTO_NUMBERS_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
    ERROR_LOTTO_NUMBER_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    ERROR_LOTTO_NUMBER_DUPLICATE: '[ERROR] 로또 번호는 서로 중복되지 않아야 합니다.',
    ERROR_BONUS_NUMBER_RANGE: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
    ERROR_BONUS_NUMBER_DUPLICATE: '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
  },

  winnings: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
  },

  getPurchaseMessage(number) {
    return `\n${number}개를 구매했습니다.`;
  },

  getResultMessage(first, second, third, fourth, fifth, rateOfReturn) {
    return (
      `\n당첨 통계\n---\n`
      + `3개 일치 (5,000원) - ${fifth}개\n`
      + `4개 일치 (50,000원) - ${fourth}개\n`
      + `5개 일치 (1,500,000원) - ${third}개\n`
      + `5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개\n`
      + `6개 일치 (2,000,000,000원) - ${first}개\n`
      + `총 수익률은 ${rateOfReturn}%입니다.`
    );
  },
};
