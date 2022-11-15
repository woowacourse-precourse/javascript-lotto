const ERROR_MESSAGE = {
  COST: {
    TYPE: '구입 금액은 숫자여야 합니다.',
    MIN: '구입 금액은 1,000원 이상이어야 합니다.',
    MAX: '구입 금액이 너무 큽니다.',
    UNIT: '구입 금액은 1,000 단위여야 합니다.',
  },
  LOTTO: {
    LENGTH: '로또 번호는 6개여야 합니다.',
    UNIQUE: '로또 번호는 중복되지 않아야 합니다.',
    TYPE: '로또 번호는 숫자여야 합니다.',
    RANGE: '로또 번호는 1~45 사이의 수여야 합니다.',
  },
  WINNING_NUMBERS: {
    LENGTH: '당첨 번호는 쉼표를 기준으로 6자리의 수를 입력해야 합니다.',
    UNIQUE: '당첨 번호는 중복되지 않아야 합니다.',
    TYPE: '당첨 번호는 숫자 이외의 값을 입력할 수 없습니다.',
    RANGE: '당첨 번호는 1~45 사이의 수여야 합니다.',
  },
  BONUS_NUMBER: {
    TYPE: '보너스 번호는 숫자여야 합니다.',
    RANGE: '보너스 번호는 1~45 사이의 수여야 합니다.',
    VALUE: '보너스 번호는 당첨 번호에 포함되지 않아야 합니다.',
  },
};

const LOTTO = {
  NUMBER_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  PRICE: 1000,
};

const RANKS = ['FIFTH', 'FOURTH', 'THIRD', 'FIRST', 'SECOND'];

const STATISTICS = {
  FIFTH: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOURTH: (count) => `4개 일치 (50,000원) - ${count}개`,
  THIRD: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  SECOND: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  FIRST: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
};

const PRIZE = {
  FIFTH: 5000,
  FOURTH: 50000,
  THIRD: 1500000,
  SECOND: 30000000,
  FIRST: 2000000000,
};

module.exports = {
  ERROR_MESSAGE,
  LOTTO,
  RANKS,
  STATISTICS,
  PRIZE,
};
