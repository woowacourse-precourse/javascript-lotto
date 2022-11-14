const LOTTO_INFO = {
  START: 1,
  END: 45,
  COUNT: 6,
};

const CURRENCY_UNIT = 1000;

const PREFIX = '[ERROR]';

const INPUT_MESSAGE = {
  MONEY: '구입금액을 입력해 주세요.',
  LOTTO_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const ERROR_MESSAGE = {
  TYPE: `${PREFIX} 숫자를 입력해 주세요.`,
  LENGTH: `${PREFIX} 숫자의 자릿수를 확인해 주세요.`,
  RANGE: `${PREFIX} 1부터 45 사이의 숫자를 입력해 주세요.`,
  DUPLICATION: `${PREFIX} 중복되지 않은 수를 입력해 주세요.`,
  CURRENCY_UNIT: `${PREFIX} 1,000원 단위의 금액을 입력해 주세요.`,
};

const RANK_MESSAGE = {
  FIFTH: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOURTH: (count) => `4개 일치 (50,000원) - ${count}개`,
  THIRD: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  SECOND: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  FIRST: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
};

module.exports = {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_INFO,
  CURRENCY_UNIT,
  RANK_MESSAGE,
};
