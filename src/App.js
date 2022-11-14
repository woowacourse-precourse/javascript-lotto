const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  setLottoAmount(money) {
    const lottoAmount = Number(money / 1000);
    this.printLottoNumber(lottoAmount);
  }

  inputMoney() {
    Console.readLine("구매 금액을 입력해주세요.", (money) => {
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
