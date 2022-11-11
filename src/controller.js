const LottoGenerator = require("./issueLotto");
const LottoResultCheck = require("./resultCheck");

class LottoGameHandler {
  constructor() {
    this.makeLotto = new LottoGenerator();
  }

  async gameStart() {
    await this.makeLotto.generateLotto();
    await this.getResult();
  }

  async getResult() {
    await LottoResultCheck.getWinningNumber();
    await LottoResultCheck.getBonusNumber();
    for (let idx = 0; idx < LottoResultCheck.lottoNumbersArray.length; idx++)
      LottoResultCheck.winningCheck(LottoResultCheck.lottoNumbersArray[idx]);
    LottoResultCheck.getTotalWinningMoney();
  }
}

module.exports = LottoGameHandler;
