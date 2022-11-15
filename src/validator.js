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

module.exports = { validateInputMoney };
