const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");

class App {
  play() {
    this.requestPay();
  }

  requestPay() {
    Console.readLine(Message.GAME_START, (pay) => {});
  }
}

const app = new App();
app.play();

module.exports = App;
