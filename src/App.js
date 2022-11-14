const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_MESSAGE } = require("./util/Constant");

const Budget = require("./Budget");

class App {
  play() {
    this.lottoMachineOn();
  }
  lottoMachineOn() {
    Console.readLine(LOTTO_MESSAGE.BUDGET, (input) => {
      this.setBudget(input);
    });
  }
  setBudget(money) {
    const budget = new Budget(money);
  }
}
module.exports = App;
