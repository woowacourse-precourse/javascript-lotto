const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE, CONDITION } = require("./constant/constant");
const validate = require("./Validate");
const Lotto = require("./Lotto");

class BuyLotto {
  constructor(howMany, makeNumbers, userInputNum, userInputBonusNum) {
    this.howMany = howMany;
    this.makeNumbers = makeNumbers;
    this.userInputNum = userInputNum;
    this.userInputBonusNum = userInputBonusNum;
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
      this.getAutoNumber();
    });
  }

  getAutoNumber() {
    const makeNumbers = [];
    for (let i = 1; i <= this.howMany; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortNumber = this.getSortNumber(numbers);
      for (let i = 0; i < sortNumber.length; i++) {
        sortNumber[i] = sortNumber[i].toString();
      }
      makeNumbers.push(sortNumber);
    }
    this.makeNumbers = makeNumbers;
    Console.print(this.howMany + MESSAGE.BUYING_RESULT);
    Console.print(this.makeNumbers);
    this.userInputNumber();
  }

  getSortNumber(numbers) {
    let sortNumber = numbers.sort(function (a, b) {
      return a - b;
    });
    return sortNumber;
  }

  userInputNumber() {
    let userInputNum;
    Console.readLine(MESSAGE.INPUT_PRIZE, (input) => {
      userInputNum = this.splitUserInput(input);
      this.validate = new validate();
      this.validate.check(userInputNum);
      this.userInputNum = userInputNum;
      this.userInputBonusNumber();
    });
  }

  splitUserInput(userInput) {
    return userInput.split(",");
  }

  userInputBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS, (input) => {
      let userInputBonusNum = [];
      userInputBonusNum.push(input);
      this.validate.bonusCheck(userInputBonusNum);
      this.userInputBonusNum = userInputBonusNum;
      this.prize();
    });
  }

  prize() {
    Console.print(MESSAGE.PRIZE_RESULT);
    Console.print("---");

    this.getResult();
  }

  getResult() {
    let count = 0;
    // for (let i = 0; i < this.howMany - 1; i++) {
    //   // if (this.userInputNum.includes(this.makeNumbers[i])) {
    //   if (this.makeNumbers[i].includes(this.userInputNum)) {
    //     count++;
    //   }
    // }
    const hey = this.makeNumbers[0].filter((x) =>
      this.userInputNum.includes(x)
    );
    console.log(hey.length);

    console.log(
      this.makeNumbers[0].filter((x) => this.userInputNum.includes(x))
    );

    Console.print(this.makeNumbers[0]);
    Console.print(this.userInputNum);
    Console.print(this.userInputBonusNum);

    const result = new Array(5).fill(0);
  }
}

module.exports = BuyLotto;
