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
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length)
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    numbers.forEach((number) => {
      if (typeof number !== "number")
        throw new Error("[ERROR] 로또 번호는 숫자로만 구성해야 합니다.");
      if (number < 1 || number > 45)
        throw new Error("[ERROR] 로또 번호는 1~45 사이의 정수입니다.");
    });
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
