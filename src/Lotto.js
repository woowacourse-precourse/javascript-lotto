class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (typeof numbers !== "object") {
      throw new TypeError("[ERROR] numbers 인자의 타입은 object 타입이어야 합니다.");
    }

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  static calculateLottoCountWithPurchaseAmount(purchaseAmount) {
    return Math.floor(purchaseAmount / 1000);
  }

  get lottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
