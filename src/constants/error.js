const ERROR = {
  SIX_NUMBERS: '[ERROR] 로또 번호는 6개여야 합니다.',
  UNIQUE_NUMBERS: '[ERROR] 로또 번호는 중복되지 않은 수로 이루어져야 합니다.',
  BETWEEN_1_TO_45_NUMBERS: '[ERROR] 로또 번호는 1~45의 수로 이루어져야 합니다.',
  THOUSANDS_NUMBER: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  NATURAL_NUMBER: '[ERROR] 자연수를 입력해야 합니다.',
};

module.exports = Object.freeze(ERROR);
