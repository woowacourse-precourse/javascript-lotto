const ERROR = {
  LOTTO: {
    LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
    DUPLICATED: '[ERROR] 중복된 숫자가 있습니다.',
    TYPE: '[ERROR] 로또 번호는 숫자만 가능합니다.',
    RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  },
  USER: {
    MONEY: {
      TYPE: '[ERROR] 숫자 이외의 값은 입력할 수 없습니다.',
      MIN_RANGE: '[ERROR] 1000원 이상의 금액을 입력해주세요.',
      MAX_RANGE: '[ERROR] 금액이 너무 큽니다.',
      DIVIDE: '[ERROR] 금액은 1000원으로 나누어 떨어져야 합니다.',
    },
    LOTTONUMBER: {
      TYPE: '[ERROR] 로또 번호는 숫자만 가능합니다. 쉼표로 구분해주세요.',

      LENGTH: '[ERROR] 1부터 45까지의 서로 다른 6개의 숫자를 입력해주세요.',

      RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',

      DUPLICATED: '[ERROR] 로또 번호는 중복이 불가능합니다.',
    },
    BONUSNUMBER: {
      TYPE: '[ERROR] 보너스 번호는 숫자만 가능합니다.',

      RANGE: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
    },
  },
};

const LOTTO_SPEC = {
  MIN_COST: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  PROPER_LENGTH: 6,
};

const LOTTO_RANK = {
  FIVE: 3,
  FOUR: 4,
  THREE: 5,
  ONE: 6,
};

const LOTTO_PRIZE = {
  FIVE_TH: 5000,
  FOUR_TH: 50000,
  THREE_RD: 1500000,
  TWO_ND: 30000000,
  ONE_ST: 2000000000,
};

const MESSAGE = {
  INPUT_MONEY: '구입금액을 입력해 주세요.',
  INPUT_LOTTONUMBERS: '당첨 번호를 입력해 주세요.',
  INPUT_BONUSNUMBER: '보너스 번호를 입력해 주세요.',
};

module.exports = {
  ERROR,
  LOTTO_SPEC,
  LOTTO_RANK,
  LOTTO_PRIZE,
  MESSAGE,
};
