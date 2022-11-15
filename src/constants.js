const MESSAGE = {
  LOTTO_NUMBER_GENERATOR: {
    INPUT_WINNER_NUMBER: '당첨 번호를 입력해 주세요.',
    INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  },
  LOTTERY_MACHINE: {
    INPUT_MONEY: '구입금액을 입력해 주세요.',
  },
};

const ERROR_PREFIX = '[ERROR]';

const COUNT = {
  LOTTO_NUMBER: 6,
  WINNER_NUMBER: 6,
  BONUS_NUMBER: 1,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
};

const ERROR_PREFIX = '[ERROR]';
const ERROR_MESSAGE = {
  MONEY_NUMBER: '구매 금액은 숫자여야 합니다.',
  LOTTO_LENGTH: `로또 번호는 ${COUNT.LOTTO_NUMBER}개여야 합니다.`,
  WINNER_NUMBER_LENTH: `당첨 번호는 ${COUNT.WINNER_NUMBER}개여야 합니다.`,
  BONUS_NUMBER_LENTH: `보너스 번호는 ${COUNT.BONUS_NUMBER}개여야 합니다.`,
  DUPLICATION: '로또 번호는 고유해야 합니다.',
  RANGE: `로또 번호는 ${COUNT.MIN_LOTTO_NUMBER}부터 ${COUNT.MAX_LOTTO_NUMBER} 사이의 숫자여야 합니다.`,
  MONEY_UNIT: '구매 금액은 천원 단위로 입력해야 합니다.',
};

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  ERROR_PREFIX,
  COUNT,
};
