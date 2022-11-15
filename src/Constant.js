class Constant {
  static PURCHASE_AMOUNT_ERROR_MESSAGE_MUST_INT = '[ERROR] 구입 금액은 숫자여야 합니다.';
  static PURCHASE_AMOUNT_ERROR_MESSAGE2_MUST_POSITIVE = '[ERROR] 구입 금액은 0원 이상이어야 합니다.';
  static PURCHASE_AMOUNT_ERROR_MESSAGE3 = '[ERROR] 구입 금액은 1000원 단위여야 합니다.';
  static WINNING_NUMBERS_ERROR_MESSAGE = '[ERROR] 당첨 번호는 6개의 숫자여야 합니다.';
  static WINNING_NUMBERS_ERROR_MESSAGE2 = '[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.';
  static WINNING_NUMBERS_ERROR_MESSAGE3 = '[ERROR] 당첨 번호는 중복되지 않아야 합니다.';
  static WINNING_NUMBERS_ERROR_MESSAGE4 = '[ERROR] 당첨 번호는 정수여야 합니다.';
  static BONUS_NUMBER_ERROR_MESSAGE = '[ERROR] 보너스 번호는 숫자여야 합니다.';
  static BONUS_NUMBER_ERROR_MESSAGE2 = '[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.';
  static BONUS_NUMBER_ERROR_MESSAGE3 = '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.';
}

module.exports = Constant;
