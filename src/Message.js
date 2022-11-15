const GAME = { // 게임 정보
  START: 1,
  END: 45,
  COUNT: 6,
  PRICE: 1000,
};

const MESSAGE = { // 출력 메세지
  BUY: '구입금액을 입력해 주세요.\n',
  COUNT: (count) => `\n${count}개를 구매했습니다.`,
  WIN_NUM: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUM: '보너스 번호를 입력해 주세요.\n',
  RESULT: '당첨 통계\n---',
  first: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  second: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  third: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  fourth: (count) => `4개 일치 (50,000원) - ${count}개`,
  fifth: (count) => `3개 일치 (5,000원) - ${count}개`,
  return: (percentage) => `총 수익률은 ${percentage}%입니다.`,
};

const RANK = { // 등수
  3: 'fifth',
  4: 'fourth',
  5: 'third',
  6: 'first',
};

const PRIZE = { // 당첨 금액
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

const ERROR = { // 에러 메세지
  COMMON: '[ERROR]',
  PURCHASE_AMOUNT: '구입하는 금액은 숫자로만 입력해야 합니다.',
  PURCHASE_UNIT: '구입하는 금액은 1,000단위로 입력해야 합니다.',
  ZERO: '0개는 구매하실 수 없습니다.',
  SIX_LENGTH: '당첨번호는 쉼표(,)로 구분되며, 6개의 숫자를 입력해야 합니다.',
  BONUS: '보너스 번호와 당첨번호는 중복이 없습니다.',
  OVERLAP: '로또 번호 간에는 중복이 없습니다.',
  RANGE: '로또 번호는 1~45 까지 입니다.',
  SIX_COUNT: '로또 번호는 6개입니다.',
};

module.exports = { GAME, MESSAGE, RANK, PRIZE, ERROR };