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
    this.inputBuyAmountView();
  }

  inputBuyAmountView() {
    this.output.print(message.INPUT_AMOUNT);
    this.input.inputLine(this.handleInputBuyAmount.bind(this));
  }

  handleInputBuyAmount(query) {
    const amount = +query;
    if (!Vaildator.isRightAmount(amount)) {
      throw new Error('[ERROR] : 잘못된 금액을 입력했습니다.');
    }
    this.user.amount = amount;
    this.input.close();
  }
}

module.exports = App;
