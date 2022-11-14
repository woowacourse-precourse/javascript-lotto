const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES, PAY_ERROR } = require("./constants/Constants.js");
const ONLY_NUMBER = /^[1-9]+$/;
const UNIT = 1000;

class App {
  #count = 0;

  play() {
    this.start();
  } 

  start() {
    Console.readLine(MESSAGES.PAY_COST, (input) => {
      this.checkPayValidation(input);
    });
  }

  checkPayValidation(purchase) {
    if (purchase < UNIT) throw new Error(PAY_ERROR.UNDER);
    if (!ONLY_NUMBER.test(purchase)) throw new Error(PAY_ERROR.ONLY_NUMBER);
    if (purchase % UNIT !== 0) throw new Error(PAY_ERROR.UNIT);
  }

}

const app = new App();
app.play();
module.exports = App;
