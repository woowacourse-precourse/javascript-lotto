const OutputUI = require('./OutputUI');
const InputUI = require('./InputUI');
const message = require('./util/message');

class App {
  constructor() {
    this.input = new InputUI();
    this.output = new OutputUI();
  }

  play() {}

  renderBuyAmountView() {
    this.output.print(message.INPUT_AMOUNT);
    this.input.inputLine().then((data) => {});
  }
}

module.exports = App;
