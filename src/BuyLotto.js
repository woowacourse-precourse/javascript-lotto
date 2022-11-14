const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE, CONDITION } = require("./constant/constant");
const lotto = require("./Lotto");

class BuyLotto {
  start() {
    this.howMuch();
  }
  howMuch() {
    Console.readLine(MESSAGE.BUYING_AMOUNT, (inputValue) => {
      if (inputValue % CONDITION.BASE_PRICE !== 0) {
        throw new Error("[ERROR] 1000원 단위로 입력이 되어야합니다.");
      }
      this.getAutoNumber(inputValue);
    });
    return;
  }

  getAutoNumber(buyAmount) {
    const amount = buyAmount / CONDITION.BASE_PRICE;
    const makeNumbers = [];
    for (let i = 1; i <= amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortNumber = this.getSortNumber(numbers);
      makeNumbers.push(sortNumber);
    }
    Console.print(makeNumbers);
  }

  getSortNumber(numbers) {
    let sortNumber = numbers.sort(function (a, b) {
      return a - b;
    });
    return sortNumber;
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

module.exports = BuyLotto;
