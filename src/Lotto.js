class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  manual() {
    // 당첨 번호가 유효하면 리턴하는 메서드
    let numbers = this.#numbers;
    for (let i = 0; i < 6; i++) {
      numbers[i] = parseInt(numbers[i]);
    }
    return numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (
      numbers[0] === numbers[1] ||
      numbers[0] === numbers[2] ||
      numbers[0] === numbers[3] ||
      numbers[0] === numbers[4] ||
      numbers[0] === numbers[5] ||
      numbers[1] === numbers[2] ||
      numbers[1] === numbers[3] ||
      numbers[1] === numbers[4] ||
      numbers[1] === numbers[5] ||
      numbers[2] === numbers[3] ||
      numbers[2] === numbers[4] ||
      numbers[2] === numbers[5] ||
      numbers[3] === numbers[4] ||
      numbers[3] === numbers[5] ||
      numbers[4] === numbers[5]
    ) {
      throw new Error("[ERROR] 로또 번호는 중복되서는 안됩니다.");
    }
    for (let i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i])) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }
    }
    for (let i = 0; i < 6; i++) {
      if (Number(numbers[i]) < 1 || Number(numbers[i]) > 46) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자입니다.");
      }
    }
    return;
  }
}

module.exports = Lotto;
