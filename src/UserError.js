class UserError {
  includingCharactersError(money) {
    if (/\D/g.test(money)) {
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    }
  }

  validateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해 주세요.");
    }
  }
}

module.exports = UserError;
