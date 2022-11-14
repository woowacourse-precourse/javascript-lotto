const checkValidation = {
  checkMoney(money) {
    if (isNaN(money))
      return {
        errorMessage: "[ERROR] 숫자만 입력할 수 있습니다.",
      };

    if (money < 1000)
      return {
        errorMessage: "[ERROR] 최소 구입금액은 1000원입니다.",
      };

    if (money % 1000 !== 0)
      return {
        errorMessage: "[ERROR] 1000원 단위로 로또를 구입해야 합니다.",
      };

    return { errorMessage: undefined };
  },
  checkLottoList(numbers) {
    if (numbers.length !== 6)
      return {
        errorMessage: "[ERROR] 로또 번호는 6개여야 합니다.",
      };
    if (!this.checkType(numbers))
      return {
        errorMessage: "[ERROR] 로또 번호는 숫자여야 합니다.",
      };
    if ([...new Set(numbers)].length !== 6)
      return {
        errorMessage: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
      };
    if (!this.checkRange(numbers))
      return {
        errorMessage: "[ERROR] 로또 번호의 범위는 1~45이어야 합니다.",
      };
    return { errorMessage: undefined };
  },
  checkBonusNumber(number, winningNumbers) {
    if (winningNumbers.includes(number))
      return {
        errorMessage:
          "[ERROR] 보너스 번호가 이미 당첨 번호에 포함되어 있습니다.",
      };
    if (isNaN(number))
      return {
        errorMessage: "[ERROR] 보너스 번호는 숫자여야 합니다.",
      };
    if (number > 45 || number < 1)
      return {
        errorMessage: "[ERROR] 보너스 번호의 범위는 1~45이어야 합니다.",
      };
  },
};
function checkType(numbers) {
  return numbers.every((number) => !isNaN(number));
}
function checkRange(numbers) {
  return numbers.every((number) => number <= 45 && number >= 1);
}

module.exports = checkValidation;
