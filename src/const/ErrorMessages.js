const ERROR_MESSAGES = {
  IS_NUMBER: "[ERROR] 숫자를 입력해주세요.",
  IS_OVER_MIN_COST: "[ERROR] 최소 금액 1000원 이상 작성해야합니다.",
  IS_NO_CHARGE: "[ERROR] 1000원 단위로 입력해주세요.",
  IS_ENOUGH: "[ERROR] 서로 중복되지 않은 6개의 숫자를 입력해주세요.",
  IS_RANGE: "[ERROR] 로또 번호는 1~45 사이의 숫자만 가능합니다.",
  IS_UNEXPECTABLE: "[ERROR] 예기치 못한 에러 발생",
  IS_WINNER_NUMBER:
    "[ERROR] 숫자와 쉼표를 이용해 중복되지 않은 6개의 숫자를 입력해주세요.",
  IS_NOT_IN_WINNER_NUMBER:
    "[ERROR] 당첨 번호에 입력되지 않은 번호를 입력해주세요.",
};

module.exports = ERROR_MESSAGES;
