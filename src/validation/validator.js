const validateInputMoney = (money) => {
  if (money % 1000 != 0) {
    throw new Error("[ERROR] 1000원으로 나누어 떨어지는 금액을 입력하세요.");
  }
  if (money < 1000) {
    throw new Error("[ERROR] 1000원이상의 금액을 입력하세요.");
  }
};

const validateLottoNumber = (winningNumbers) => {
  if (winningNumbers.length != 6) {
    throw new Error("[ERROR] 6개의 숫자를 입력하세요.");
  }
  winningNumbers.forEach((i) => {
    if (i > 45 || i < 1) {
      throw new Error("[ERROR] 1~45 사이의 숫자를 입력하세요.");
    }
  });

  const checkDup = new Set(winningNumbers);
  const checkDupArr = [...checkDup];
  if (checkDupArr.length != winningNumbers.length) {
    throw new Error("[ERROR] 중복되지 않는 숫자를 입력하세요.");
  }
};

const validateBonusNumber = (numbers, bonusNumber) => {
  if (numbers.includes(bonusNumber)) {
    throw new Error("[ERROR] 중복되지 않는 숫자를 입력하세요.");
  }
};

module.exports = {
  validateInputMoney,
  validateLottoNumber,
  validateBonusNumber,
};
