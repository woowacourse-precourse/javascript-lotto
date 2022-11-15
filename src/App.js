const { Console } = require('@woowacourse/mission-utils');
const Machine = require('./Machine');
const Display = require('./Display');

class App {
  play() {
    Console.readLine(Display.guidance('PAYMENT'), (payment) => {
      const machine = new Machine(payment);
      machine.work();
    });
  }
}

module.exports = App;
