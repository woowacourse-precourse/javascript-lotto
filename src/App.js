const { Console } = require("@woowacourse/mission-utils");
const Machine = require('./Machine.js');
const machine = new Machine();

class App {
  constructor() {
    this.lottos;
  }

  inputCost() {
    machine.getCost();
    
    Console.readLine('', (cost) => {
      machine.calculateCount(cost);
      this.lottos = machine.issueLottos();
    })
  }

  play() {
    this.inputCost();
  }
}

const app = new App();
app.play();


module.exports = App;
