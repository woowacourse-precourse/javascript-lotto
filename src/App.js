const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES, PAY_ERROR } = require("./constants/Constants.js");
const UNIT = 1000;

class App {
  #count = 0;

  play() {
    this.start();
  } 

  start() {
    Console.readLine(MESSAGES.PAY_COST, (input) => {
      this.checkPayValidation(input);
      this.#count = this.checkPayAmount(input);
    });
  }

  checkPayValidation(purchase) {
    if (purchase < UNIT) throw new Error(PAY_ERROR.UNDER);
    if (isNaN(purchase)) throw new Error(PAY_ERROR.ONLY_NUMBER);   
    if (purchase % UNIT !== 0) throw new Error(PAY_ERROR.UNIT);
  }

  checkPayAmount(purchase) {
    purchase /= UNIT;
    Console.print('\n' + MESSAGES.PURCHASED_MESSAGE(purchase));
    return purchase;
  }


}

const app = new App();
app.play();
module.exports = App;
