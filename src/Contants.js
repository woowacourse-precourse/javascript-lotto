const CONSTANT = {
  ERROR: {
    NOT_THOUSAND_ERROR: `[ERROR] 결제 금액은 1000원 단위로 입력해주셔야 합니다.`,
    NOT_NUMBER_ERROR: `[ERROR] 결제 금액은 숫자만 입력해주셔야 합니다.`,
    CHECK_OVERLAP_LENGTH: `[ERROR] 당첨번호는 6자리의 중복되지 않는 숫자를 입력해주셔야 합니다.`,
    CHECK_NUMBER_RANGE_IS_NUMBER: `[ERROR] 당첨번호는 1부터 45까지의 '숫자'만 입력해주셔야 합니다.`,
    CHECK_BONUS_IS_NUMBER: `[ERROR] 보너스 번호는 1부터 45까지의 하나의 숫자만 입력해주셔야 합니다.`,
    CHECK_BONUS_OVERLAP: `[ERROR] 보너스 번호는 로또번호와 중복되면 안됩니다.`,
  },
  MESSAGE: {
    INPUT_MONEY: '구입금액을 입력해 주세요.',
    PRINT_COUNTLOTTO: '개를 구매했습니다.',
    INPUT_WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
    INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  },
};

module.exports = CONSTANT;
