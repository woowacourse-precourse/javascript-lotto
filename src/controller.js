const LottoGenerator = require("./issueLotto");
const LottoResultCheck = require("./resultCheck");
const MissionUtils = require("@woowacourse/mission-utils");

class LottoGameHandler {
  constructor() {
    this.makeLotto = new LottoGenerator();
  }

  gameStart() {
    this.makeLotto.generateLotto();
  }

  getResult() {
    LottoResultCheck.getWinningNumber();
  }
}

module.exports = LottoGameHandler;
