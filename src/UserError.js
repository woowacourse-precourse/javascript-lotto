class UserError {
  validateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    }
  }
}

module.exports = UserError;
