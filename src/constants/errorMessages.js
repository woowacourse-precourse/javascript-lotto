class errorMessages {
  static NOT_A_NUMBER = "[ERROR] 입력값이 비었거나 숫자가 아닙니다. 숫자를 입력해주세요.";
  static NOT_A_MULTIPLE_1000 =
    "[ERROR] 구입 금액은 1000으로 나누어 떨어지도록 입력해주세요.";
  static NOT_6_NUMBER = "[ERROR] 쉼표로 구분된 6개의 당첨 번호를 입력해주세요.";
  static OUT_OF_RANGE = "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.";
  static DUPLICATED_NUM = "[ERROR] 로또 번호는 중복이 없도록 입력해주세요.";
  static NOT_SINGLE_NUM = "[ERROR] 보너스 번호는 한개만 입력 해주세요.";
}

module.exports = Object.freeze(errorMessages);
