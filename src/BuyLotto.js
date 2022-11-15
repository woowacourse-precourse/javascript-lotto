const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE, CONDITION } = require("./constant/constant");
const validate = require("./Validate");
const Lotto = require("./Lotto");

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
    firstPrize
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

    Console.print(MESSAGE.PRIZE_RESULT);
    Console.print("---");

    // 1등 판별
    for (let i = 0; i < this.howMany; i++) {
      const result = this.makeNumbers[i].filter((x) =>
        this.userInputNum.includes(x)
      );

      if (result.length === 6) {
        // Console.print("6개 일치 (2,000,000,000원)");
        this.firstPrize += 1;
        // this.prize(result.length);
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

    for (let i = 0; i < this.howMany; i++) {
      const result = this.makeNumbers[i].filter((x) => prizeArray.includes(x));
      // console.log(result);
      // this.checkBonusPrize(result, i);
    }
    this.printResult();
  }

  checkBonusPrize(result, i) {
    if (result.length === 5) {
      this.makeNumbers[i].includes(String(this.userInputBonusNum))
        ? (this.secondPrize += 1)
        : (this.thirdPrize += 1);
    }
    console.log(result);

    console.log(this.makeNumbers[i].includes(String(this.userInputBonusNum)));

    this.printResult();

    // if (this.makeNumbers[i].includes(String(this.userInputBonusNum))) {
    //   const prize = result.length + 1;
    //   Console.print(`${prize}개 일치`);
    //   return;
    // }
    // if (result.length >= 3) {
    //   const prize = result.length;
    //   Console.print(`${prize}개 일치`);
    // }
  }

  prize(correct) {
    // 결과값을 this.전체 생성자로 받아서 리턴하기
    console.log(correct);
    switch (correct) {
      case 6:
        // Console.print(`6개 일치 (2,000,000,000원) - ${this.firstPrize}개`);
        this.resultArray[0] += 1;
        break;
      case 5:
        // 보너스 볼 일치하는 지 확인하는 메소드 필요

        break;
      case 4:
        this.resultArray[3] += 1;

        // Console.print(`4개 일치 (50,000원) - ${this.fourthPrize}개`);
        break;
      case 3:
        this.resultArray[4] += 1;
        // Console.print(`3개 일치 (5,000원) - ${this.fifthPrize}개`);
        break;
      default:
        break;
    }
  }

  printResult() {
    Console.print(`3개 일치 (5,000원) - ${this.fifthPrize}개`);
    Console.print(`4개 일치 (50,000원) - ${this.fourthPrize}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.thirdPrize}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.secondPrize}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.firstPrize}개`);
    Console.print("총 수익률은 입니다");
  }
}

module.exports = BuyLotto;
