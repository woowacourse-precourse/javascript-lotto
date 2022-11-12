const InputCheck = require('../model/InputCheck');
const LottoRandomNum = require('../model/LottoRandomNum');
const InputDisplay = require('../view/InputDisplay');
const ResultDisplay = require('../view/ResultDisplay');

class Controller {
  constructor() {
    this.InputDisplay = new InputDisplay();
    this.InputCheck = new InputCheck();
    this.LottoRandomNum = new LottoRandomNum();
    this.ResultDisplay = new ResultDisplay();
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
    const result = this.LottoRandomNum.getLottoNum(amount);
    this.ResultDisplay.printRandomNum(result);
  }
}

module.exports = Controller;
