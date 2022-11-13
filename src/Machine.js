const AmountNumber = require("./numbers/AmountNumber");

class Machine {
  constructor() {
    this.amountNumber = new AmountNumber();
  }
  start() {
    this.amountNumber.amount();
  }
}

const machine = new Machine();
machine.start();
