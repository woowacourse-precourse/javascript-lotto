class Exception {
  isMultipleOfThousand(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1000의 배수여야 합니다.");
    }
    return true;
  }
  isNumber(text) {
    if (isNaN(text)) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
    return true;
  }

  isInWinNumber(bonusNumber, winNumber) {
    if (winNumber.includes(bonusNumber)) {
      throw new Error("[ERROR] 당첨 번호 리스트에 이미 존재하는 번호입니다.");
    }
    return true;
  }
}
module.exports = Exception;
