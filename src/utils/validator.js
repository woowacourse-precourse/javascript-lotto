function isValidateUserInput(amount) {
  if (amount.length === 0) {
    throw new Error("[ERROR] 입력 내용이 없습니다.");
  }
  if (amount === "0") {
    throw new Error("[ERROR] 0을 입력하셨습니다.");
  }
  if (amount % 1000 !== 0) {
    throw new Error("[ERROR] 1000원으로 나누어 떨어지지 않습니다.");
  }
  return true;
}

exports.isValidateUserInput = isValidateUserInput;
