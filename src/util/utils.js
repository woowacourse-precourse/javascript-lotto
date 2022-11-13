const isValidMoneyNumberAmount = (input) => {
  const money = Number(input);
  if (isNaN(money) || money === undefined) {
    throw new Error("[ERROR] 금액 입력 시 숫자 이외에는 입력할 수 없습니다.");
  }
  if (!Number.isInteger(money)) {
    throw new Error("[ERROR] 금액 입력 시 소수점 이하는 허용되지 않습니다.");
  }
  if (money < 0) {
    throw new Error("[ERROR] 금액 입력 시 음수를 입력할 수 없습니다.");
  }
  if (money % 1000 !== 0) {
    throw new Error("[ERROR] 금액은 1,000 원 단위로만 입력 가능합니다.");
  }
};

module.exports = { isValidMoneyNumberAmount };
