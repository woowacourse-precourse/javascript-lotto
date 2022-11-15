const Machine = require('./Machine');
const Display = require('./Display');
const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.readLine(Display.guidance('PAYMENT'), (payment) => {
      const machine = new Machine(payment);
      machine.work();
    });
  }
}

module.exports = App;
