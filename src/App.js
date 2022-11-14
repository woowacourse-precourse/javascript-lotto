const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./constants/Constants.js");


class App {
  #count = 0;

  play() {
    this.start();
  } 

  start() {
    Console.readLine(MESSAGES.PAY_COST, (input) => {
    });
  }

}

const app = new App();
app.play();
module.exports = App;
