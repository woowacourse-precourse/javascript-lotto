const { Console } = require("@woowacourse/mission-utils");

class App {
  inputAmount;
  play() {
    this.askForAmount();
  }

  askForAmount() {
    Console.readLine("구입금액을 입력해 주세요.", (input) => {
      this.inputAmount = Number(input);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
