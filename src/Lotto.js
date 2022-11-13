class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.sorting(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (var num in numbers) {
      if (num < "1" && num > "45")
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    var setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size)
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다.");
  }

  sorting(numbers) {
    numbers.sort(function (a, b) {
      return a - b;
    });
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
