const { Console } = require("@woowacourse/mission-utils");
const MESSAGES = require('./Constants');

class App {
  constructor() {
    this.payment = 0;
  }
  play() {
    Console.readline(MESSAGES.PAYMENT, (payment) => {
      this.payment = payment;
    });
    if(payment % 1000 === 0){
      throw new Error(MESSAGES.ERROR.PAYMENT);
    }
  }
}

const app = App();
app.play();

module.exports = App;
