const MessageViewer = require("../view/view");

const MissionUtils = require("@woowacourse/mission-utils");
const LottoResultCheck = require("../model/resultCheck");
const { VALUE_NUMBER } = require("../utils/constants");

class LottoGenerator {
  constructor() {
    this.viewer = new MessageViewer();
  }
  makeLottoNumber() {
    const LOTTONUMBER = MissionUtils.Random.pickUniqueNumbersInRange(
      VALUE_NUMBER.SMALLEST_LOTTO_NUMBER,
      VALUE_NUMBER.BIGGEST_LOTTO_NUMBER,
      VALUE_NUMBER.TOTAL_LOTTO_NUMBERS
    );
    return LOTTONUMBER.sort((x, y) => x - y);
  }

  generateLotto(numberOfGames) {
    this.viewer.numberOfGamesMessage(numberOfGames);
    for (let gameCount = 0; gameCount < numberOfGames; gameCount++) {
      const LOTTO_NUMBER = this.makeLottoNumber();
      this.viewer.issuedLottoNumberMessage(LOTTO_NUMBER);
      LottoResultCheck.lottoNumbersArray.push(LOTTO_NUMBER);
    }
  }
}

module.exports = LottoGenerator;
