const LOTTO = {
  PRICE: 1000,
  START: 1,
  END: 45,
  LENGTH: 6,
  MINIMUM_MATCH_COUNT: 3,
  RESULT_PRINT_ORDER: [3, 4, 5, '5B', 6],
};

const REVENUE = {
  3: {
    message: '3개 일치 (5,000원)',
    revenue: 5000,
  },
  4: {
    message: '4개 일치 (50,000원)',
    revenue: 50000,
  },
  5: {
    message: '5개 일치 (1,500,000원)',
    revenue: 1500000,
  },
  '5B': {
    message: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    revenue: 30000000,
  },
  6: {
    message: '6개 일치 (2,000,000,000원)',
    revenue: 2000000000,
  },
};

const INPUT = {
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  MONEY: '구입금액을 입력해 주세요.',
};

module.exports = {
  LOTTO,
  REVENUE,
  INPUT,
};
