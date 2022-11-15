const ERROR = {
    LOTTO: {
      DUPLICATE_NUMBER: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
      OUT_OF_RANGE: '[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.',
      NOT_SIX_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
    },
    BUDGET: {
      NOT_INTEGER: '[ERROR] 금액은 정수 값이어야 합니다.',
      NOT_IN_RANGE: '[ERROR] 금액은 1000원 단위이어야 합니다.',
    },
    BONUS: {
      OUT_OF_RANGE: '[ERROR] 보너스 번호는 1에서 45 사이의 숫자만 가능합니다.',
      DUPLICATE_NUMBER: '[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.',
      NOT_INTEGER: '[ERROR] 보너스 번호는 정수이어야 합니다.',
    },
  };
  
  module.exports = {
    ERROR,
  };
  