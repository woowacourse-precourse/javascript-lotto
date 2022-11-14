const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Validation = require("./InputValidate");
const { LOTTERY_AMOUNT } = require("./constant");

class App {
  constructor() {
    this.validation = new Validation();
  }

  makeLottoNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lottoValidate = new Lotto(lottoNumber);
    return lottoNumber;
  }

  printLottoNumber() {
    Console.print("당첨 번호를 입력해주세요.");
    const lottoNumber = this.makeLottoNumber();
    Console.print(String(lottoNumber));
  }

  makeUserNumber() {
    const userNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    this.validation.userNumberValidate(userNumber);
    return userNumber;
  }

  printUserNumber(lottoAmount) {
    Console.print(`${lottoAmount}개를 구매했습니다.`);
    for (let time = 0; time < lottoAmount; time += 1) {
      const userNumber = this.makeUserNumber(lottoAmount);
      Console.print(userNumber);
    }
    this.printLottoNumber();
  }

  setLottoAmount(money) {
    const lottoAmount = Number(money / LOTTERY_AMOUNT);
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
