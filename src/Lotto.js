class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  deduplication(numbers) {
    const uniq = array => [...new Set(array)];
    if (uniq(numbers).length !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  outerRange(numbers) {
    numbers.forEach( number => {
      if (number > 0 && number < 46) {
        throw new Error("[ERROR] 로또 번호의 숫자 범위는 1 ~ 45까지 입니다.");
      }
    });
  }
}

module.exports = Lotto;
