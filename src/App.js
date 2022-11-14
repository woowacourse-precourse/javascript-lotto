const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { LOTTERY_AMOUNT } = require("./constant");

class App {
  // lottoNumberValidate(lottoNumber) {
  //   const lotto = new Lotto(lottoNumber);
  // }

  // makeLottoNumber() {
  //   const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
  //   this.lottoNumberValidate(lottoNumber);
  //   console.log(lottoNumber);
  // }

  printLottoNumber(lottoAmount) {
    Console.print(`${lottoAmount}개를 구매했습니다.`);
    for (let time = 0; time < lottoAmount; time += 1) {
      const userNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      Console.print(userNumber);
    }
  }

  setLottoAmount(money) {
    const lottoAmount = Number(money / LOTTERY_AMOUNT);
    this.printLottoNumber(lottoAmount);
  }

  inputMoneyValidate(money) {
    if (typeof money !== "number") {
      throw new Error("[ERROR]금액은 숫자만 입력 가능합니다.");
    }
    if (money % 10 !== 0) {
      throw new Error("[ERROR]금액은 10원 단위로 입력 가능합니다.");
    }
    if (money < 1000) {
      throw new Error(`[ERROR]${LOTTERY_AMOUNT}원 이상부터 구매가 가능합니다.`);
    }
  }

  inputMoney() {
    Console.readLine("구매 금액을 입력해주세요.", (money) => {
      this.inputMoneyValidate(Number(money));
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
