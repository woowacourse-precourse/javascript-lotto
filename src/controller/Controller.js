const InputDisplay = require('../view/InputDisplay');

class Controller {
  constructor() {
    this.InputDisplay = new InputDisplay();
  }

  start() {
    this.InputDisplay.getInput(
      '구입금액을 입력해 주세요.\n',
      this.getLotto.bind(this)
    );
  }

  getLotto(amount) {}
}

module.exports = Controller;
