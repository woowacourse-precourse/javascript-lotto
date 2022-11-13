const { Random } = require("@woowacourse/mission-utils");
// const { ERROR_MSG_THOUSAND_UNIT } = require("./constants/error-message");
// const { WINNINGS } = require("./constants/winnings");

class App {
  constructor() {
    this.lottos = [];
  }

  play() {}

  createLottoNums() {
    const lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNums;
  }
}

// module.exports = App;
const app = new App();
app.play();
