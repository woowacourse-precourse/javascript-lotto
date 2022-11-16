const LOTTO = {
  price: 1000,
  start: 1,
  end: 45,
  length: 6,
  minimumMatchCount: 3,
  resultPrintOrder: [3, 4, 5, '5B', 6],
};

const PRIZE = {
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
  winningNumber: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.',
  money: '구입금액을 입력해 주세요.',
};

const PRINT = {
  analysis: '당첨 통계',
  divideLine: '---',
};

module.exports = {
  LOTTO,
  PRIZE,
  INPUT,
  PRINT,
};
