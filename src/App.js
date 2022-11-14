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
      (buyPrice) => {
        if (buyPrice % 1000 !== 0) {
          throw new Error("알맞는 금액을 입력해 주세요.");
        }
        return this.userLottoNumber(buyPrice / 1000);
      }
    );
  }

  userLottoNumber(buyCount) {
    MissionUtils.Console.print(`\n ${buyCount}개를 구매했습니다.`);
    let userLottoNumbers = [];
    for (let i = 0; i < buyCount; i++) {
      userLottoNumbers[i] = MissionUtils.Random.pickUniqueNumbersInRange(
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
