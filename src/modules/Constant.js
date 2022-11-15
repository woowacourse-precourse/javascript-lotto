const GAME = {
  START: 1,
  END: 45,
  COUNT: 6,
  PRICE: 1000,
};

const MESSAGE = {
  BUY: '구입금액을 입력해 주세요.\n',
  CONFIRM_BUY: (count) => `\n${count}개를 구매했습니다.`,
  CONFIRM_WIN: '당첨 번호를 입력해 주세요.\n',
  CONFIRM_BONUS: '보너스 번호를 입력해 주세요.\n',
  NOTICE_RESULT: '당첨 통계\n---',
  first: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  second: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  third: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  fourth: (count) => `4개 일치 (50,000원) - ${count}개`,
  fifth: (count) => `3개 일치 (5,000원) - ${count}개`,
  profit: (percentage) => `총 수익률은 ${percentage}%입니다.`,
};

const RULE = {
  3: 'fifth',
  4: 'fourth',
  5: 'third',
  6: 'first',
};

const PRIZE_BOARD = {
  fifth: 5000,
  fourth: 50000,
  third: 1500000,
  second: 30000000,
  first: 2000000000,
};

const ERROR = {
  COMMON: '[ERROR]',
  NOT_NUMBER: '구입금액은 쉼표를 제외한 숫자로 입력해야 합니다.',
  NOT_MULTIPLE_OF_THOUSAND: '구입금액은 1000단위로 입력하세요.',
  CANT_ZERO: '0개는 구매할 수 없습니다.',
  MUST_HAVE_COMMA: '당첨번호는 쉼표(,)로 구분하여 6개의 정수를 입력해야 합니다.',
  CANT_OVERLAP_BONUS: '보너스번호는 당첨번호와 중복될 수 없습니다.',
  CANT_OVERLAP_LOTTO: '로또 번호는 중복이 없어야 합니다.',
  MUST_IN_RANGE: '로또 번호는 1 ~ 45 사이의 값 입니다.',
  NOT_PROPER_LENGTH: '로또 번호는 6개여야 합니다.',
};

module.exports = { GAME, MESSAGE, RULE, PRIZE_BOARD, ERROR };
