class Money {
  #number;

  constructor(number) {
    this.characterCheck(number);
    this.divideCheck(number);
    this.#number = number;
  }

  characterCheck(number) {
    if (typeof number != "number") {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }
  }

  divideCheck(number){
    if(number % 1000 !== 0){
      throw new Error("[ERROR] 구입 금액은 1000으로 나누어 떨어져야 합니다.")
    }
  }

  divide(number){
    const count = number / 1000;
    return count;
  }
}

module.exports = Money;