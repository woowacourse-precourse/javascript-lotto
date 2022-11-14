const OutputUI = require('./ui/OutputUI');
const InputUI = require('./ui/InputUI');
const message = require('./util/message');
const User = require('./User');
const Vaildator = require('./Vaildator');
const LottoGenerator = require('./LottoGenerator');

class App {
  constructor() {
    this.input = new InputUI();
    this.output = new OutputUI();
    this.user = new User();
  }

  async play() {
    await this.inputBuyAmountView();
    this.printUserLottos();
  }

  async inputBuyAmountView() {
    this.output.print(message.INPUT_AMOUNT);
    let amount = await this.input
      .amount()
      .then((resolve) => resolve)
      .catch((e) => {});
    this.user.amount = amount;
  }
}

module.exports = App;
