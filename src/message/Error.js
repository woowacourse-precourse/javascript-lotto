class ErrorMsg {
  static INVALID_LOTTO_COUNT = "[ERROR] 로또 번호는 6개여야 합니다.";
  static INVALID_LOTTO_DUPLICATE =
    "[ERROR] 로또 번호는 중복을 포함할 수 없습니다.";
  static INVALID_LOTTO_NOT_NUM =
    "[ERROR] 로또 번호는 숫자만 사용할 수 있습니다.";

  static INVALID_PAY_NOT_NUM = "[ERROR] 구입금액은 숫자만 입력할 수 있습니다.";
  static INVALID_PAY_UNIT = "[ERROR] 구입 금액은 1000원 단위로 입력해야합니다.";

  static INVALID_WINNING_DUPLICATE =
    "[ERROR] 당첨 번호는 중복을 포함할 수 없습니다.";
  static INVALID_WINNING_RANGE =
    "[ERROR] 당첨 번호는 1에서 45 사이의 번호만 입력 가능합니다.";
  static INVALID_WINNING_COUNT = "[ERROR] 당첨 번호는 총 6개여야 합니다.";
  static INVALID_WINNING_NOT_NUM =
    "[ERROR] 당첨 번호는 숫자만 입력 가능합니다.";
  static INVALID_BONUS_DUPLICATE =
    "[ERROR] 당첨번호와 보너스 번호는 중복될 수 없습니다.";

  static INVALID_BONUS_RANGE =
    "[ERROR] 보너스 번호는 1부터 45사이의 번호만 입력 가능합니다.";
  static INVALID_BONUS_NOT_NUM =
    "[ERROR] 보너스 번호는 숫자만 입력 가능합니다.";
}

module.exports = ErrorMsg;
