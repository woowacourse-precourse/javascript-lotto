class Validation {
  static purchaseInput(purchase) {
    const result = parseInt(purchase, 10) % 1000;
    if (result !== 0) throw new Error("[ERROR] 1000원 단위로 입력해주세요");
  }
}

module.exports = Validation;
