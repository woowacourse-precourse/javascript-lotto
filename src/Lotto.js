class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.overLap(numbers);
    this.stringCheck(numbers);
    this.numberRange(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  overLap(numbers) {
    if (new Set(numbers).size < numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 수가 있습니다");
    }
  }

  stringCheck(numbers) {
    let isNan = numbers.some((item) => isNaN(item));
    if (isNan) { throw new Error("[ERROR] 로또 번호에 문자가 포함 되있습니다."); }
  }

  numberRange(numbers) {
    let lessCount = numbers.some((item) => item < 1);
    let muchCount = numbers.some((item) => item > 45);
    if (lessCount || muchCount) { throw new Error("[ERROR] 1 ~ 45 숫자에 포함되지 않습니다."); }
  }
}

module.exports = Lotto;
