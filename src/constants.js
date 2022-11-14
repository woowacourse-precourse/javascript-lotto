const ERROR_PREFIX = '[ERROR]';

const ERROR_MSG = {
  LOTTO: {
    NUMBER: '로또 번호는 숫자여야 합니다.',
    LENGTH: '로또 번호는 6개여야 합니다.',
    DUPLICATION: '로또 번호는 고유해야 합니다.',
  },
};

const NUM = {
  LOTTO: 6,
};

module.exports = { ERROR_MSG, ERROR_PREFIX, NUM };
