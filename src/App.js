const OutputUI = require('./OutputUI');
const InputUI = require('./InputUI');
const message = require('./util/message');
const User = require('./User');
const Vaildator = require('./Vaildator');

class App {
  constructor() {
    this.input = new InputUI();
    this.output = new OutputUI();
    this.user = new User();
  }

  play() {
    this.renderBuyAmountView();
  }

  async renderBuyAmountView() {
    this.output.print(message.INPUT_AMOUNT);
    let buyAmount = await this.input.inputLine();
    if (!Vaildator.isRightAmount(buyAmount)) {
      throw new Error('[ERROR] : 올바른 금액이 아닙니다.');
      return;
    }
    this.user.amount = buyAmount;
  }
}

module.exports = App;
