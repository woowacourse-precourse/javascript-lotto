const RESULT = Object.freeze({
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  LAST: 6,
});

const ERROR = Object.freeze({
  notThousandWonUnit: '[ERROR] 1,000원 단위로 입력해주세요.',
  notSixNumbers: '[ERROR] 로또 번호는 6개여야 합니다.',
  duplicatedNumbers: '[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다.',
  notOneToFourtyFiveRange: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  bonusNumberExistInLottoWinnningNumbers: '[ERROR] 보너스 번호는 당첨 번호와 다른 숫자여야 합니다.',
});

const LOTTO_PRICE = 1000;

const PRIZE_MONEY = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
});

const MESSAGE = Object.freeze({
  REQUEST: {
    PURCHASE_AMOUNT: `구입금액을 입력해 주세요.`,
    WINNING_NUMBERS: `당첨 번호를 입력해 주세요.`,
    BOUNS_NUMBER: `보너스 번호를 입력해 주세요.`,
  },

  STATISTIC: {
    TITLE: `당첨 통계`,
    DIVIDER: `---`,
    FIRST: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
    SECOND: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
    THIRD: (count) => `5개 일치 (1,500,000원) - ${count}개`,
    FOURTH: (count) => `4개 일치 (50,000원) - ${count}개`,
    FIFTH: (count) => `3개 일치 (5,000원) - ${count}개`,
  },

  RATE_OF_RETURN: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`,
  TERMINATE_GAME: `로또 게임을 종료합니다.`,
});

module.exports = { RESULT, ERROR, LOTTO_PRICE, PRIZE_MONEY, MESSAGE };
