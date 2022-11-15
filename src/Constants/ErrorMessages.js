const purchaseError = {
  NOT_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
  MINUS: '[ERROR] 0보다 큰 수를 입력해 주세요.',
  NOT_DIVIDED_BY_THOUSAND: '[ERROR] 구입 금액은 1000원 단위로 입력해 주세요.',
};

const lottoNumberError = {
  NOT_VALID_NUMBER_SCOPE: '[ERROR] 숫자 범위가 1~45가 아닙니다',
  NOT_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
  NUMBER_DUPLICATION: '[ERROR] 중복된 번호를 입력할 수 없습니다',
};

module.exports = { purchaseError, lottoNumberError };
