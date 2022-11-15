const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./lib/constant");
class App {
  play() {
    this.getAmountPaid((input) => {
      console.log(input);
      this.appClose();
    });
  }

  getAmountPaid(callback) {
    Console.readLine(MESSAGES.TAKE_MONEY, (input) => {
      callback(input / 1000);
    });
  }

  appClose() {
    Console.close();
  }
}

module.exports = App;

let app = new App();
app.play();
