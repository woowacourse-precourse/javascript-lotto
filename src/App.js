const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.buyLotto = 0;
    this.userLottoNumbers = [];
    this.lottoNumber = [];
    this.bonusNumber;
    this.checkResultRank = {
      First: 0,
      Second: 0,
      Third: 0,
      Fourth: 0,
      Fifth: 0,
    };
  }

  play() {
    this.userBuyLotto();
  }

  userBuyLotto() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요. \n",
      (buyLotto) => {
        this.buyLotto = buyLotto;
        this.userBuyLottoCheck(this.buyLotto);
      }
    );
  }

  userBuyLottoCheck(buyLotto) {
    if (this.buyLotto % 1000 !== 0) {
      throw new Error("알맞는 금액을 입력해 주세요.");
    }
    this.buyLotto = parseInt(buyLotto);
    this.userLottoNumber(this.buyLotto / 1000);
  }

  userLottoNumber(buyCount) {
    MissionUtils.Console.print(`\n ${buyCount}개를 구매했습니다.`);
    for (let i = 0; i < buyCount; i++) {
      this.userLottoNumbers[i] = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      MissionUtils.Console.print([...userLottoNumbers[i]]);
    }
    return [...userLottoNumbers];
  }

}

module.exports = App;
