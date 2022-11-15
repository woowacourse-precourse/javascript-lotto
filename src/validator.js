const validateInputMoney = (money) => {
  if (isNaN(money)) {
    throw new Error("[ERROR] 구매금액은 숫자로 입력해야 합니다.");
  }
  if (money % 1000 !== 0) {
    throw new Error("[ERROR] 구매금액은 1000원 단위로 입력해야 합니다.");
  }
  if (money <= 0) {
    throw new Error("[ERROR] 구매금액은 0원 이상이어야 합니다.");
  }
  return money;
};

const validateInputBonusNum = (winningNumbers, bonusNum) => {
  if (isNaN(bonusNum))
    throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
  if (bonusNum < 1 || bonusNum > 45)
    throw new Error("[ERROR] 보너스 번호의 범위는 1부터 45까지여야 합니다.");
  if (winningNumbers.includes(bonusNum))
    throw new Error(
      "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
    );
};

module.exports = { validateInputMoney, validateInputBonusNum };
