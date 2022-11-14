const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers; // input user's value
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }
}

module.exports = Lotto;
