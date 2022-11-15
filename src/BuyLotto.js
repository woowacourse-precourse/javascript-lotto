const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE, CONDITION } = require("./constant/constant");
const validate = require("./Validate");

class BuyLotto {
  constructor(
    howMany,
    makeNumbers,
    userInputNum,
    userInputBonusNum,
    fifthPrize,
    fourthPrize,
    thirdPrize,
    secondPrize,
    firstPrize,
    getYield
  ) {
    this.howMany = howMany;
    this.makeNumbers = makeNumbers;
    this.userInputNum = userInputNum;
    this.userInputBonusNum = userInputBonusNum;
    this.resultArray = new Array(5).fill(0);
    this.prizeArray = new Array();
    this.fifthPrize = fifthPrize;
    this.fourthPrize = fourthPrize;
    this.thirdPrize = thirdPrize;
    this.secondPrize = secondPrize;
    this.firstPrize = firstPrize;
    this.getYield = getYield;
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
      this.getResult();
    });
  }

  getResult() {
    const prizeArray = [...this.userInputNum, ...this.userInputBonusNum];
    this.fifthPrize = 0;
    this.fourthPrize = 0;
    this.thirdPrize = 0;
    this.secondPrize = 0;
    this.firstPrize = 0;
    this.yield = 0;

    Console.print(MESSAGE.PRIZE_RESULT);
    Console.print("---");

    // 1등 판별
    for (let i = 0; i < this.howMany; i++) {
      const result = this.makeNumbers[i].filter((x) =>
        this.userInputNum.includes(x)
      );

      if (result.length === 6) {
        this.firstPrize += 1;
      }

      if (result.length === 5) {
        this.makeNumbers[i].includes(String(this.userInputBonusNum))
          ? (this.secondPrize += 1)
          : (this.thirdPrize += 1);
      }
      if (result.length === 4) {
        this.makeNumbers[i].includes(String(this.userInputBonusNum))
          ? (this.thirdPrize += 1)
          : (this.fourthPrize += 1);
      }
      if (result.length === 3) {
        this.makeNumbers[i].includes(String(this.userInputBonusNum))
          ? (this.fourthPrize += 1)
          : (this.fifthPrize += 1);
      }
      if (result.length === 2) {
        this.makeNumbers[i].includes(String(this.userInputBonusNum))
          ? (this.fifthPrize += 1)
          : null;
      }
    }

    this.printResult();
  }

  printResult() {
    Console.print(`3개 일치 (5,000원) - ${this.fifthPrize}개`);
    Console.print(`4개 일치 (50,000원) - ${this.fourthPrize}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.thirdPrize}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.secondPrize}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.firstPrize}개`);
    Console.print(`총 수익률은 ${this.getYield}입니다`);
  }
}

module.exports = BuyLotto;
