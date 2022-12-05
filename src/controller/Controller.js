const Lotto = require('../Lotto');
const InputCheck = require('../model/InputCheck');
const LottoRandomNum = require('../model/LottoRandomNum');
const LottoResult = require('../model/LottoResult');
const InputDisplay = require('../view/InputDisplay');
const ResultDisplay = require('../view/ResultDisplay');

class Controller {
  #InputDisplay;
  #InputCheck;
  #ResultDisplay;
  #LottoRandomNum;
  #LottoResult;
  #amount;
  #lottoNum;
  #winSplitNum;
  #bonusNum;

  constructor() {
    this.#InputDisplay = new InputDisplay();
    this.#InputCheck = new InputCheck();
    this.#ResultDisplay = new ResultDisplay();
    this.#LottoRandomNum = new LottoRandomNum();
    this.#LottoResult = new LottoResult();

    this.#amount;
    this.#lottoNum;
    this.#winSplitNum;
    this.#bonusNum;
  }

  start() {
    this.#InputDisplay.readAmountInput(this.getLotto.bind(this));
  }

  getLotto(amount) {
    this.#InputCheck.checkAmountInput(amount);

    this.#amount = amount;
    const result = this.#LottoRandomNum.getLottoNum(amount);
    this.#lottoNum = result.lottoNums;

    this.#ResultDisplay.printRandomNum(result);
    this.inputWinningNum();
  }

  inputWinningNum() {
    this.#InputDisplay.readWinningNum(this.getWinningNum.bind(this));
  }

  getWinningNum(winningNum) {
    this.#winSplitNum = winningNum.split(',');

    const lottoNumValid = new Lotto(this.#winSplitNum);
    lottoNumValid.validate(this.#winSplitNum);
    this.inputBonusNum();
  }

  inputBonusNum() {
    this.#InputDisplay.readBonusNum(this.getBonusNum.bind(this));
  }

  getBonusNum(bonusNum) {
    this.#InputCheck.checkBonusInput(bonusNum, this.#winSplitNum);
    this.#bonusNum = bonusNum;
    this.getLottoResult();
  }

  getLottoResult() {
    const winStatus = this.#LottoResult.findSameNum(
      this.#lottoNum,
      this.#winSplitNum.map(Number),
      Number(this.#bonusNum)
    );

    this.#ResultDisplay.printLottoResult(winStatus, this.#amount);
  }
}

module.exports = Controller;
