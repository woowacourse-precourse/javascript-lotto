const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Validation = require("./InputValidate");
const {
  LOTTERY_AMOUNT,
  FINAL_RESULT_MESSAGE,
  WINNING_AMOUNT,
} = require("./constant");

class App {
  constructor() {
    this.validation = new Validation();
    this.userNumberArray = [];
    this.lotteryAmount = 0;
    this.lotteryArray = [];
    this.bonus = 0;
    this.resultArray = Array.from({ length: 5 }, () => 0);
  }

  printProfit(profit) {
    const totalProfit = (profit / (this.lotteryAmount * 1000)) * 100;
    Console.print(`총 수익률은 ${totalProfit}%입니다.`);
    Console.close();
  }

  printFinalResult() {
    let profit = 0;
    for (let result = 0; result < 5; result += 1) {
      Console.print(
        `${FINAL_RESULT_MESSAGE[result]} - ${this.resultArray[result]}개`
      );
      profit += WINNING_AMOUNT[result] * this.resultArray[result];
    }
    this.printProfit(profit);
  }

  calcLotteryResult(correctNumber) {
    const arrayLength = correctNumber.length;
    if (arrayLength === 3) this.resultArray[0] += 1;
    if (arrayLength === 4) this.resultArray[1] += 1;
    if (arrayLength === 5) this.resultArray[2] += 1;
    if (arrayLength === 6) {
      if (correctNumber.includes(this.bonus)) {
        this.resultArray[3] += 1;
      } else {
        this.resultArray[4] += 1;
      }
    }
  }

  checkLotteryResult() {
    this.userNumberArray.forEach((number) => {
      const correctNumber = number.filter((element) =>
        this.lotteryArray.includes(element)
      );
      this.calcLotteryResult(correctNumber);
    });
    this.printFinalResult();
  }

  printResultInfo() {
    Console.print("\n당첨 통계");
    Console.print("---");
    this.checkLotteryResult();
  }

  inputBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해주세요.", (number) => {
      this.validation.bonusNumberValidate(number);
      this.lotteryArray.push(Number(number));
      this.printResultInfo();
    });
  }

  inputLotteryNumber() {
    Console.readLine("\n당첨 번호를 입력해주세요.", (number) => {
      const lottoNumber = number.split(",").map(Number);
      const lottoValidate = new Lotto(lottoNumber);
      this.lotteryArray = lottoNumber;
      this.inputBonusNumber();
    });
  }

  makeUserNumber() {
    const userNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    this.validation.userNumberValidate(userNumber);
    this.userNumberArray.push(userNumber);
    return userNumber;
  }

  printUserNumber() {
    for (let time = 0; time < this.lotteryAmount; time += 1) {
      const userNumber = this.makeUserNumber();
      Console.print(`[${userNumber.join(", ")}]`);
    }
    this.inputLotteryNumber();
  }

  setLottoAmount(money) {
    this.lotteryAmount = Number(money / LOTTERY_AMOUNT);
    Console.print(`${this.lotteryAmount}개를 구매했습니다.`);
    this.printUserNumber();
  }

  inputMoney() {
    Console.readLine("구매 금액을 입력해주세요.", (money) => {
      this.validation.inputMoneyValidate(Number(money));
      this.setLottoAmount(money);
    });
  }

  play() {
    this.inputMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
