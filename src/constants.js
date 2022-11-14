const MESSAGE = {
  LOTTO_NUMBER_GENERATOR: {
    INPUT_WINNER_NUMBER: '당첨 번호를 입력해 주세요.',
    INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  },
};

const ERROR_PREFIX = '[ERROR]';

const ERROR_MESSAGE = {
  LOTTO: {
    NUMBER: '로또 번호는 숫자여야 합니다.',
    LENGTH: '로또 번호는 6개여야 합니다.',
    DUPLICATION: '로또 번호는 고유해야 합니다.',
    RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  },
};

const NUM = {
  LOTTO: 6,
  WINNER: 6,
  BONUS: 1,
};

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  ERROR_PREFIX,
  NUM,
};
