const InputCheck = require('../model/InputCheck');
const InputDisplay = require('../view/InputDisplay');

class Controller {
  constructor() {
    this.InputDisplay = new InputDisplay();
    this.InputCheck = new InputCheck();
  }

  start() {
    this.InputDisplay.getInput(
      '구입금액을 입력해 주세요.\n',
      this.getLotto.bind(this)
    );
  }

  getLotto(amount) {
    if (!this.InputCheck.checkAmountInput(amount))
      throw new Error('[ERROR] 입력한 구입 금액이 올바르지 않습니다.');
  }
}

module.exports = Controller;
