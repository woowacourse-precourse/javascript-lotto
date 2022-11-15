const LOTTO_RANK = {
  firstPlace: {
    matchNum: 3,
    winnings: 5000,
  },
  secondPlace: {
    matchNum: 4,
    winnings: 50000,
  },
  thirdPlace: {
    matchNum: 5,
    winnings: 1500000,
  },
  fourthPlace: {
    matchNum: 5.5,
    winnings: 30000000,
  },
  fifthPlace: {
    matchNum: 6,
    winnings: 2000000000,
  },
};

const MESSAGE = {
  LOTTO_NUMBER_GENERATOR: {
    INPUT_WINNER_NUMBER: '당첨 번호를 입력해 주세요.',
    INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  },
  LOTTERY_MACHINE: {
    INPUT_MONEY: '구입금액을 입력해 주세요.',
    BUY_LOTTO(count) {
      return `${count}개를 구매했습니다.`;
    },
    EARNING_RATE(rate) {
      return `총 수익률은 ${rate}%입니다.`;
    },
    WIN_STATISTIC(rank, correntNum) {
      const { matchNum, winnings } = LOTTO_RANK[rank];
      const matchStr =
        matchNum === LOTTO_RANK.fourthPlace.matchNum
          ? '5개 일치, 보너스 볼 일치'
          : `${matchNum}개 일치`;
      const winningsStr = `(${winnings.toLocaleString()}원)`;
      const correctNumStr = `${correntNum}개`;

      return `${matchStr} ${winningsStr} - ${correctNumStr}`;
    },
  },
};

const NUMBER = {
  MONEY_UNIT: 1000,
  CORRECT_WINNER_NUMBER: 1,
  CORRECT_BONUS_NUMBER: 0.5,
};

const COUNT = {
  LOTTO_NUMBER: 6,
  WINNER_NUMBER: 6,
  BONUS_NUMBER: 1,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
};

const ERROR_PREFIX = '[ERROR]';
const ERROR_MESSAGE = {
  LOTTO_NUMBER: '로또 번호는 숫자여야 합니다.',
  MONEY_NUMBER: '구매 금액은 숫자여야 합니다.',
  LOTTO_NUMBER_LENGTH: `로또 번호는 ${COUNT.LOTTO_NUMBER}개여야 합니다.`,
  WINNER_NUMBER_LENTH: `당첨 번호는 ${COUNT.WINNER_NUMBER}개여야 합니다.`,
  BONUS_NUMBER_LENTH: `보너스 번호는 ${COUNT.BONUS_NUMBER}개여야 합니다.`,
  LOTTO_DUPLICATION: '로또 번호는 고유해야 합니다.',
  WINNER_DUPLICATION: '당첨 번호는 고유해야 합니다.',
  BONUS_DUPLICATION:
    '보너스 번호는 당첨 번호와 중복되지 않는 고유한 값이어야 합니다.',
  RANGE: `로또 번호는 ${COUNT.MIN_LOTTO_NUMBER}부터 ${COUNT.MAX_LOTTO_NUMBER} 사이의 숫자여야 합니다.`,
  MONEY_UNIT: '구매 금액은 천원 단위로 입력해야 합니다.',
};

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  ERROR_PREFIX,
  COUNT,
  NUMBER,
  LOTTO_RANK,
};
