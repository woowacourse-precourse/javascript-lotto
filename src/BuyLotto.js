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

    Console.print(MESSAGE.PRIZE_RESULT);
    Console.print("---");

    // 1등 판별
    for (let i = 0; i < this.howMany; i++) {
      const result = this.makeNumbers[i].filter((x) =>
        this.userInputNum.includes(x)
      );

      if (result.length === 6) {
        Console.print("6개 일치 (2,000,000,000원)");
      }

      this.checkBonusPrize(result, i);
    }

    // // 그외 등수  !! 현재 에러
    // for (let i = 0; i < this.howMany; i++) {
    //   const result = this.makeNumbers[i].filter((x) =>
    //     this.prizeArray.includes(x)
    //   );
    //   this.prize(result.length);
    // }

    // for (let i = 0; i < this.howMany; i++) {
    //   const result = this.makeNumbers[i].filter((x) =>
    //     this.userInputBonusNum.includes(x)
    //   );
    //   this.prize(result.length);
    // }
  }

  checkBonusPrize(result, i) {
    console.log(result);

    console.log(this.makeNumbers[i].includes(String(this.userInputBonusNum)));
    if (this.makeNumbers[i].includes(String(this.userInputBonusNum))) {
      const prize = result.length + 1;
      Console.print(`${prize}개 일치`);
      return;
    }
    if (result.length >= 3) {
      const prize = result.length;
      Console.print(`${prize}개 일치`);
    }
  }

  prize(correct) {
    // 결과값을 this.전체 생성자로 받아서 리턴하기
    console.log(correct);
    switch (correct) {
      case 6:
        Console.print("6개 일치 (2,000,000,000원)");
        break;
      case 5:
        // 보너스 볼 일치하는 지 확인하는 메소드 필요
        Console.print("5개 일치 (1,500,000원)");
        break;
      case 4:
        Console.print("4개 일치 (50,000원)");
        break;
      case 3:
        Console.print("3개 일치 (5,000원)");
        break;
      default:
        // 콘솔에
        Console.print("그 외");

        break;
    }

    Console.print(`
    3개 일치 (5,000원) - ${this.fifthPrize}개
    4개 일치 (50,000원) - ${this.fourthPrize}개
    5개 일치 (1,500,000원) - ${this.thirdPrize}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.secondPrize}개
    6개 일치 (2,000,000,000원) - ${this.firstPrize}개`);
  }
}

module.exports = BuyLotto;
