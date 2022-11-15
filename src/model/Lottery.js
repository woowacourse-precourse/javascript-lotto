const {isNumber, isInRange, isUnique} = require("../validator");

class Lotto {
  #numbers;
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    else if (!isUnique(numbers))
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    else if (numbers.some((number) => !isNumber(number) || !isInRange(1, 45, number)))
      throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
  }

  getNumbers() {
    return this.#numbers;
  }
}

class Bonus {
  #number;
  
  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {
    if (!isNumber(number) || !isInRange(1, 45, number))
      throw new Error("[ERROR] 보너스 번호는 1부터 45사이의 숫자여야 합니다.");
  }

  getNumber() {
    return this.#number;
  }
}

class Lottery{
  #lotto;
  #bonus;
  constructor(builder) {
    this.#validate(builder.getLotto().getNumbers(), builder.getBonus().getNumber());
    this.#lotto = builder.getLotto();
    this.#bonus = builder.getBonus();
  }
  
  #validate(numbers, bonus) {
    if (numbers.includes(bonus))
      throw new Error("[ERROR] 보너스 번호는 6개 번호에 포함되어선 안됩니다.");
  }

  getBonus() {
    return this.#bonus.getNumber();
  }

  getNumbers() {
    return this.#lotto.getNumbers();
  }

  static Builder = class {
    #lotto;
    #bonus;
    
    getLotto() {
      return this.#lotto;
    }

    getBonus() {
      return this.#bonus;
    }

    setLotto(numbers) {
      this.#lotto = new Lotto(numbers);
      return this;
    }
    
    setBonus(bonus) {
      this.#bonus = new Bonus(bonus);
      return this;
    }

    build() {
      return new Lottery(this);
    }
  }
}

module.exports = Lottery;
