const { Console } = require("@woowacourse/mission-utils");
const Machine = require('./Machine.js');
const machine = new Machine();

class App {
  constructor() {
    
  }

  inputCost() {
    machine.getCost();
    
    Console.readLine('', (cost) => {
      machine.calculateCount(cost);
    })
  }

  play() {
    this.inputCost();
  }
}

const app = new App();
app.play();


module.exports = App;
