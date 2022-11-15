class Lotto {
  #numbers;
  /**
   * @param {Array{number}} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    else if (numbers.length !== [...new Set(numbers)].length)
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    else if (numbers.some((number) => number <= 0 || number > 45))
      throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  getNumbers() {
    return this.#numbers;
  }
}

class Lottery extends Lotto {
  #bonus;
  constructor(builder) {
    super(builder.getNumbers());
    this.#validate(builder.getBonus());
    this.#bonus = builder.getBonus();
  }
  
  #validate(bonus) {
    if (super.hasNumber(bonus))
      throw new Error("[ERROR] 보너스 번호는 6개 번호에 포함되어선 안됩니다.");
    else if (bonus <= 0 || bonus > 45)
      throw new Error("[ERROR] 보너스 번호는 1부터 45사이의 숫자여야 합니다.");
  }

  getBonus() {
    return this.#bonus;
  }

  static Builder = class {
    #numbers = [];
    #bonus = 0;
    
    getNumbers() {
      return this.#numbers;
    }

    getBonus() {
      return this.#bonus;
    }

    setNumbers(numbers) {
      this.#numbers = [...numbers];
      return this;
    }
    
    setBonus(bonus) {
      this.#bonus = bonus;
      return this;
    }

    build() {
      return new Lottery(this);
    }
  }
}

module.exports = Lottery;
