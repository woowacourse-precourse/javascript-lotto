const PURCHASE_ERROR = {
  notANumber: "[ERROR] 구매 금액을 숫자로 입력해주세요.",
  notDividedExactly: "[ERROR] 구매 금액을 1000원 단위로 입력해주세요.",
  isZeroOrLess: "[ERROR] 0보다 큰 구매 금액을 입력해주세요.",
};

const BONUS_ERROR = {
  notANumber: "[ERROR] 보너스 번호를 숫자로 입력해주세요.",
  duplicateWithWinning: "[ERROR] 당첨 번호를 제외한 숫자를 입력해주세요.",
  outOfRange: "[ERROR] 1~45 범위의 숫자를 입력해주세요.",
};

module.exports = { PURCHASE_ERROR, BONUS_ERROR };
