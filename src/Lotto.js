class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.split(',');
  }

  isNumeric(str) {
    if (typeof str != "string") {
      return false
    }
    return !isNaN(str) && !isNaN(parseFloat(str))
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let number of numbers) {
      if (!this.isNumeric(number)) {
        throw new Error('[ERROR] 오로지 숫자만 입력 가능합니다.')
      }
      if (!(1 <= number <= 45)) {
        throw new Error("[ERROR] 번호가 1 ~ 45까지의 수가 아닙니다.");
      }
    }
    if (new Set(userInputNumbers).size !== 6) {
      throw new Error("[ERROR] 숫자가 중복되면 안됩니다.");
    }
  }
}

module.exports = Lotto;
