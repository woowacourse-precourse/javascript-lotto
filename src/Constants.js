const LOTTO = {
  PRICE: 1000,
  START: 1,
  END: 45,
  LENGTH: 6,
  MINIMUM_MATCH_COUNT: 3,
  RESULT_PRINT_ORDER: [3, 4, 5, '5B', 6],
};

const PRIZE = {
  3: {
    MESSAGE: '3개 일치 (5,000원)',
    REVENUE: 5000,
  },
  4: {
    MESSAGE: '4개 일치 (50,000원)',
    REVENUE: 50000,
  },
  5: {
    MESSAGE: '5개 일치 (1,500,000원)',
    REVENUE: 1500000,
  },
  '5B': {
    MESSAGE: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    REVENUE: 30000000,
  },
  6: {
    MESSAGE: '6개 일치 (2,000,000,000원)',
    REVENUE: 2000000000,
  },
};

const INPUT = {
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  MONEY: '구입금액을 입력해 주세요.',
};

const PRINT = {
  ANALYSIS: '당첨 통계',
  DIVIDE_LINE: '---',
};

module.exports = {
  LOTTO,
  PRIZE,
  INPUT,
  PRINT,
};
