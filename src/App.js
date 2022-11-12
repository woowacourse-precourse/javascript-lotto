const OutputUI = require('./OutputUI');
const InputUI = require('./InputUI');

class App {
  constructor() {
    this.input = new InputUI();
    this.output = new OutputUI();
  }
  play() {}
}

module.exports = App;
