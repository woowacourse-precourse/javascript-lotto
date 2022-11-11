const MissionUtils = require("@woowacourse/mission-utils");
const LottoGenerator = require("./LottoGenerator");
const { Console } = MissionUtils;

class App {
  message = {
    START_MESSAGE: "구입금액을 입력해 주세요.",
    WINNING_MESSAGE: "당첨 번호를 입력해 주세요.",
    BONUS_MESSAGE: "보너스 번호를 입력해 주세요.",
  };
  constructor() {}

  play() {
    this.inputPrice();
  }
  inputPrice() {
    Console.readLine(`${this.message.START_MESSAGE}\n`, (payment) => {
      const lottoGenerator = new LottoGenerator();
      this.myLotto = lottoGenerator.generate(payment);
    });
  }
}
const app = new App();
app.play();

module.exports = App;
