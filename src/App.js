const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Validation = require("./InputValidate");
const { LOTTERY_AMOUNT } = require("./constant");

class App {
  constructor() {
    this.validation = new Validation();
  }

  lottoNumberValidate(lottoNumber) {
    const lotto = new Lotto(lottoNumber);
  }

  makeLottoNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    this.lottoNumberValidate(lottoNumber);
    console.log(lottoNumber);
  }

  printUserNumber(lottoAmount) {
    Console.print(`${lottoAmount}개를 구매했습니다.`);
    for (let time = 0; time < lottoAmount; time += 1) {
      const userNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      this.validation.userNumberValidate(userNumber);
      Console.print(userNumber);
    }
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
