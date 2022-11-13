class Purchase {
  #purchase;
  constructor(purchase) {
    this.purchaseInput(purchase);
    this.#purchase = purchase;
  }
  purchaseInput(purchase) {
    if (isNaN([...purchase]))
      throw new Error("[ERROR] 문자열이 포함되었습니다.");
    const result = parseInt(purchase, 10) % 1000;
    if (result !== 0) throw new Error("[ERROR] 1000원 단위로 입력해주세요");
  }
}

module.exports = Purchase;
