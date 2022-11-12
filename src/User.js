class User {
  #myLottos;
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  validate(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 천원단위여야 합니다.");
    }
  }

  printMyLottos() {}
}
