const INPUT_MESSAGE = {
  MONEY: '구입금액을 입력해 주세요.',
  LOTTO_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const PREFIX = '[ERROR]';

const ERROR_MESSAGE = {
  TYPE: `${PREFIX} 숫자를 입력해 주세요.`,
  LENGTH: `${PREFIX} 숫자의 자릿수를 확인해 주세요.`,
  RANGE: `${PREFIX} 1부터 45 사이의 숫자를 입력해 주세요.`,
  DUPLICATION: `${PREFIX} 중복되지 않은 수를 입력해 주세요.`,
  CURRENCY_UNIT: `${PREFIX} 1,000원 단위의 금액을 입력해 주세요.`,
};

module.exports = { INPUT_MESSAGE, ERROR_MESSAGE };
