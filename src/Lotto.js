const { Console, Random } = require("@woowacourse/mission-utils");
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
    numbers.forEach((number) => {
      if (number > 45 || number < 1) {
        throw new Error("[ERROR] 로또 번호의 숫자 범위는 1 ~ 45까지 입니다.");
      }
    });
    if ([...new Set(numbers)].length !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }
}
module.exports = Lotto;
