const ERROR = {
  SIX_NUMBERS: '[ERROR] 로또 번호는 6개여야 합니다.',
  UNIQUE_NUMBERS: '[ERROR] 로또 번호는 중복되지 않은 수로 이루어져야 합니다.',
  FROM1TO45_NUMBERS: '[ERROR] 로또 번호는 1~45의 수로 이루어져야 합니다.',
  TOTAL_PURCHASE_AMOUNT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
};

module.exports = Object.freeze(ERROR);
