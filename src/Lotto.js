const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getLotto() {
    return this.#numbers;
  }

  printLotto() {
    let str = "[";
    for (let i = 0; i < 5; i++) {
      str += this.#numbers[i] + ", ";
    }
    str += this.#numbers[5] + "]";
    MissionUtils.Console.print(str);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let i; i < 6; i++) {
      this.findIntException(numbers[i]);
      this.findRangeException(numbers[i]);
      this.findCommonException(numbers[i]);
    }
    this.findOverLap(numbers);
  }

  findOverLap(NumArray) {
    const setNumber = new Set(NumArray);
    if (setNumber.size != NumArray.length) {
      throw new Error("[ERROR] 번호가 중복됩니다!");
    }
  }
  findIntException(Num) {
    if (!parseInt(Num)) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
  }
  findRangeException(Num) {
    if (parseInt(Num) < 1 || parseInt(Num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45사이의 정수여야 합니다.");
    }
  }
  findCommonException(Num) {
    if (!Number.isInteger(Num)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45사이의 정수여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
