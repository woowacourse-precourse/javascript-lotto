const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { INPUT_PRICE_MSG } = require('./Constants.js');

class App {
  inputPriceCallback(input) {}

  play() {
    Console.readLine(INPUT_PRICE_MSG, (input) =>
      this.inputPriceCallback(input)
    );
  }
}

module.exports = App;
