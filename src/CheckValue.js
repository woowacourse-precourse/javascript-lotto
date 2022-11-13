class CheckValue {
  constructor(pay) {
    this.isValidPay(pay);
  }

  isValidPay(pay) {
    if (isNaN(pay)) throw new Error("[ERROR] 숫자만 입력해 주세요.");
    if (pay < 1000)
      throw new Error("[ERROR] 최소 구매 가격은 1,000원 이상이에요.");
    if (pay % 1000 !== 0)
      throw new Error("[ERROR] 1,000원 단위 숫자만 구매가 가능해요.");
  }
}

module.exports = CheckValue;
