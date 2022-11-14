const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE, CONDITION } = require("./constant/constant");
const Lotto = require("./Lotto");

class BuyLotto {
  constructor(howMany, makeNumbers) {
    this.howMany = howMany;
    this.makeNumbers = makeNumbers;
    // this.userNumber = userNumber;
  }
  start() {
    this.amount();
  }
  amount() {
    Console.readLine(MESSAGE.BUYING_AMOUNT, (inputValue) => {
      if (inputValue % CONDITION.BASE_PRICE !== 0) {
        throw new Error("[ERROR] 1000원 단위로 입력이 되어야합니다.");
      }
      this.howMany = inputValue / CONDITION.BASE_PRICE;
      this.getAutoNumber(inputValue);
    });
  }

  getAutoNumber(buyAmount) {
    const amount = buyAmount / CONDITION.BASE_PRICE;
    const makeNumbers = [];
    for (let i = 1; i <= amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortNumber = this.getSortNumber(numbers);
      makeNumbers.push(sortNumber);
    }
    this.makeNumbers = makeNumbers;
    Console.print(amount + "개를 구매하셨습니다.");
    Console.print(makeNumbers);
    this.userInputNumber();
  }

  getSortNumber(numbers) {
    let sortNumber = numbers.sort(function (a, b) {
      return a - b;
    });
    return sortNumber;
  }

  userInputNumber() {
    Console.readLine(MESSAGE.INPUT_PRIZE, (input) => {
      const userInputNum = this.splitUserInput(input);
      const userBonusNum = this.userInputBonusNumber();
    });
  }

  splitUserInput(userInput) {
    return userInput.split(",");
  }

  userInputBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS, (input) => {
      return input;
    });
  }
}

module.exports = BuyLotto;
