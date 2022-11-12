const APP_MESSAGE = {
  INSERT_PURCHASE_COST: '구입금액을 입력해 주세요.\n',
  PURCHASE_AMOUNT: (count) => `${count}개를 구매했습니다.`,
  INSERT_WIN_NUMBER: '당첨 번호를 입력해 주세요.\n',
  INSERT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  GET_RANK_STATISTICS: '당첨 통계\n---',
};

const EXCEPTION_MESSAGE = {
  INPUT_ERROR: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INPUT_LENGTH_ERROR: '[ERROR] 6개의 숫자를 입력하셔야 합니다.',
  INPUT_OVERLAPPED: '[ERROR] 중복된 번호를 입력하셨습니다.',
  INPUT_DECIMAL: '[ERROR] 자연수만 입력 가능합니다.',
};

const EXCEPTION_REASON = {
  INPUT_ERROR: 'INPUT_ERROR',
  INPUT_LENGTH_ERROR: 'INPUT_LENGTH_ERROR',
  INPUT_OVERLAPPED: 'INPUT_OVERLAPPED',
  INPUT_DECIMAL: 'INPUT_DECIMAL',
};

const RANK_STATISTICS_MESSAGE = {
  RANK_5: (count) => `3개 일치 (5,000원) - ${count}개`,
  RANK_4: (count) => `4개 일치 (50,000원) - ${count}개`,
  RANK_3: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  RANK_2: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  RANK_1: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

const LOTTERY_PRIZE = {
  0: 0,
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

const CORRECT_NUMBER = {
  0: '0',
  1: '0',
  2: '0',
  3: '5',
  4: '4',
  5: '3',
  6: '2',
  7: '1',
};

const LOTTERY_INFORMATION = {
  COST: 1000,
  LENGTH: 6,
};

module.exports = {
  APP_MESSAGE,
  EXCEPTION_MESSAGE,
  EXCEPTION_REASON,
  RANK_STATISTICS_MESSAGE,
  LOTTERY_INFORMATION,
  LOTTERY_PRIZE,
  CORRECT_NUMBER,
};
