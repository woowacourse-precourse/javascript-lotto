class AmountError {
  #amount;

  constructor(amount) {
    this.amounterror(amount);
    this.#amount = amount;
  }

  amounterror(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000원단위로 입력해주세요");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = AmountError;
