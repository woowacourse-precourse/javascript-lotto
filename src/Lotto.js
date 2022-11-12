const { Console, Random } = require("@woowacourse/mission-utils");
const BuyLotto = require("./utils/BuyLotto");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
    this.buyLotto = new BuyLotto();
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  start() {
    const buyLotto = this.buyLotto.howMuch();
    this.numbers = buyLotto;

    // const buyLotto = this.BuyLotto.making();
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

  // making() {
  //   const makeNumbers = [];
  //   const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  //   makeNumbers.push(number);
  //   console.log(makeNumbers);
  //   this.number = number;
  // }
}

module.exports = Lotto;
