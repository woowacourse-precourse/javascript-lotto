const Lotto = require('../Lotto');
const InputCheck = require('../model/InputCheck');
const LottoRandomNum = require('../model/LottoRandomNum');
const LottoResult = require('../model/LottoResult');
const InputDisplay = require('../view/InputDisplay');
const ResultDisplay = require('../view/ResultDisplay');

class Controller {
  constructor() {
    this.InputDisplay = new InputDisplay();
    this.InputCheck = new InputCheck();
    this.ResultDisplay = new ResultDisplay();
    this.LottoRandomNum = new LottoRandomNum();
    this.LottoResult = new LottoResult();

    this.amount;
    this.lottoNum;
    this.winSplitNum;
    this.bonusNum;
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

    this.amount = amount;
    const result = this.LottoRandomNum.getLottoNum(amount);
    this.lottoNum = result.lottoNums;

    this.ResultDisplay.printRandomNum(result);
    this.inputWinningNum();
  }

  inputWinningNum() {
    this.InputDisplay.getInput(
      '당첨 번호를 입력해 주세요.\n',
      this.getWinningNum.bind(this)
    );
  }

  getWinningNum(winningNum) {
    this.winSplitNum = winningNum.split(',');

    const lottoNumValid = new Lotto(this.winSplitNum);
    lottoNumValid.validate(this.winSplitNum);
    this.inputBonusNum();
  }

  inputBonusNum() {
    this.InputDisplay.getInput(
      '\n보너스 번호를 입력해 주세요.\n',
      this.getBonusNum.bind(this)
    );
  }

  getBonusNum(bonusNum) {
    if (!this.InputCheck.checkBonusInput(bonusNum, this.winSplitNum)) {
      throw new Error('[ERROR] 입력한 보너스 번호가 올바르지 않습니다.');
    }
    this.bonusNum = bonusNum;
    this.getLottoResult();
  }

  getLottoResult() {
    const winStatus = this.LottoResult.findSameNum(
      this.lottoNum,
      this.winSplitNum.map(Number),
      Number(this.bonusNum)
    );

    this.ResultDisplay.printLottoResult(winStatus, this.amount);
  }
}

module.exports = Controller;
