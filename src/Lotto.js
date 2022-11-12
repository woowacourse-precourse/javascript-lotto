const { Console, Random } = require("@woowacourse/mission-utils");
const BuyLotto = require("./BuyLotto");
const { MESSAGE } = require("./constant/constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers; // input user's value
    this.buylotto = new BuyLotto();
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  start() {
    this.buylotto.howMuch();
  }

  // userInputNumber() {
  //   Console.readLine("숫자를 입력해주세요 : ", (input) => {
  //     this.numbers = Array.from(input);
  //     for (let i = 0; i < this.numbers.length; i++) {
  //       this.numbers[i] = parseInt(this.numbers[i]);
  //     }
  //   });
  //   return this.#numbers;
  // }
}

module.exports = Lotto;
