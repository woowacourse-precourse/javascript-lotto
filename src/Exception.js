function validateMoney(money) {
  if (money % 1000 !== 0) {
    throw Error("[ERROR] 금액은 1000의 배수만 입력 가능합니다.");
  }
}

module.exports = {
  validateMoney,
};
