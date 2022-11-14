const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Validation = require("./InputValidate");
const { LOTTERY_AMOUNT } = require("./constant");

class App {
  constructor() {
    this.validation = new Validation();
    this.userNumberArray = [];
    this.lotteryArray = [];
  }

  // printResult() {
  //   Console.print("당첨 통계");
  //   Console.print("---");
  //   Console.print(this.userNumberArray);
  //   Console.print(this.lotteryArray);
  // }

  makeBonusNumber() {
    const bonusNumber = Random.pickUniqueNumbersInRange(1, 45, 1);
    this.validation.bonusNumberValidate(bonusNumber);
    this.lotteryArray = [...this.lotteryArray, ...bonusNumber];
    return bonusNumber;
  }

  printBonusNumber() {
    Console.print("보너스 번호를 입력해주세요.");
    const bonusNumber = this.makeBonusNumber();
    Console.print(String(bonusNumber));
    this.printResult();
  }

  makeLottoNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lottoValidate = new Lotto(lottoNumber);
    this.lotteryArray = lottoNumber;
    return lottoNumber;
  }

  printLottoNumber() {
    Console.print("당첨 번호를 입력해주세요.");
    const lottoNumber = this.makeLottoNumber();
    Console.print(String(lottoNumber));
    this.printBonusNumber();
  }

  makeUserNumber() {
    const userNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    this.validation.userNumberValidate(userNumber);
    this.userNumberArray.push(userNumber);
    return userNumber;
  }

  printUserNumber(lottoAmount) {
    for (let time = 0; time < lottoAmount; time += 1) {
      const userNumber = this.makeUserNumber(lottoAmount);
      Console.print(userNumber);
    }
    this.printLottoNumber();
  }

  setLottoAmount(money) {
    const lottoAmount = Number(money / LOTTERY_AMOUNT);
    Console.print(`${lottoAmount}개를 구매했습니다.`);
    this.printUserNumber(lottoAmount);
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
