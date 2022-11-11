const MESSAGE = {
  BUY: '구입금액을 입력해 주세요.',
  CREATE_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  CREATE_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const ERROR_PREFIX = '[ERROR]';

const ERROR = {
  NOT_ENOUGH_NUMBER: `${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`,
  DUPLICATE: `${ERROR_PREFIX} 로또 번호는 중복되지 않아야 합니다.`,
  OUT_OF_RANGE: `${ERROR_PREFIX} 로또 번호는 1~45 사이의 숫자여야 합니다.`,
  NOT_A_NUMBER: `${ERROR_PREFIX} 입력값은 숫자여야 합니다.`,
  UNIT_OF_THOUSAND: `${ERROR_PREFIX} [ERROR] 로또 구입 금액은 천 원 단위여야 합니다.`,
};

const WINNING_MONEY = [5000, 50000, 1500000, 30000000, 2000000000];
const MATCHING_MESSAGE = [
  '3개 일치',
  '4개 일치',
  '5개 일치',
  '5개 일치, 보너스 볼 일치',
  '6개 일치',
];

module.exports = { MESSAGE, ERROR, WINNING_MONEY, MATCHING_MESSAGE };
