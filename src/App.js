const MissionUtils = require("@woowacourse/mission-utils");
const LottoGenerator = require("./LottoGenerator");
const { Console } = MissionUtils;

class App {
  message = {
    START_MESSAGE: "구입금액을 입력해 주세요.",
    WINNING_MESSAGE: "당첨 번호를 입력해 주세요.",
    BONUS_MESSAGE: "보너스 번호를 입력해 주세요.",
  };
  // lottoGenerator = new LottoGenerator();
  constructor() {}

  play() {
    Console.readLine(`${this.message.START_MESSAGE}\n`, (payment) => {
      const lottoGenerator = new LottoGenerator();
      lottoGenerator.validatePayment(payment);
    });
  }

  printMessage(message) {
    Console.print(message);
  }
}
const app = new App();
app.play();

module.exports = App;
