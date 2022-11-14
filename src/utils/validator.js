function isValidateUserInput(amount) {
  if (amount.trim().length === 0) {
    throw new Error("[ERROR] 입력 내용이 없습니다.");
  }
  if (isNaN(amount)) {
    throw new Error("[ERROR] 숫자가 아닌 값을 입력했습니다.");
  }
  if (amount === "0") {
    throw new Error("[ERROR] 0을 입력하셨습니다.");
  }
  if (amount % 1000 !== 0) {
    throw new Error("[ERROR] 1000원으로 나누어 떨어지지 않습니다.");
  }
  return true;
}

function isValidateBonusNumber(bonusNumber, winningNumber) {
  if (isNaN(bonusNumber)) {
    throw new Error("[ERROR] 숫자가 아닙니다.");
  }
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error("[ERROR] 1-45 사이의 숫자가 아닙니다.");
  }
  if (winningNumber.includes(bonusNumber)) {
    throw new Error("[ERROR] 당첨 번호에 포함된 숫자 입니다.");
  }

  return true;
}

exports.isValidateUserInput = isValidateUserInput;
exports.isValidateBonusNumber = isValidateBonusNumber;
