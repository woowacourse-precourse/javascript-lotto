const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  setLottoAmount(money) {
    const lottoAmount = Number(money / 1000);
    this.printLottoNumber(lottoAmount);
  }

  inputMoneyValidate(money) {
    if (typeof money !== "number") {
      throw new Error("금액은 숫자만 입력 가능합니다.");
    }
    if (money % 10 !== 0) {
      throw new Error("금액은 10원 단위로 입력 가능합니다.");
    }
  }

  inputMoney() {
    Console.readLine("구매 금액을 입력해주세요.", (money) => {
      this.inputMoneyValidate();
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
