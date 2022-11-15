class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a, b) => a-b);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    numbers.forEach(element => {
        if (isNaN(element)) {
            throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
        }
        if (element < 1 || element > 45) {
            throw new Error("[ERROR] 범위에서 벗어난 값이 포함되어 있습니다.");
        }
    });

    const sorted_nums = numbers.sort((a, b) => a - b);
    for (let i = 1; i < 6; i++) {
        if (sorted_nums[i-1] == sorted_nums[i]) {
            throw new Error("[ERROR] 중복 값이 포함되어 있습니다.");
        }
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
