const MissionUtils = require("@woowacourse/mission-utils");
const generateLottoNum = require("./generateLottoNum");
const sayWinningBonus = require("./sayWinningBonus");

class lottoProcess {
  constructor() {
    console.log("constructor");
    this.generateLottoNum = new generateLottoNum();
    this.sayWinningBonus = new sayWinningBonus();
    // this.userLotto = []
  }

  lottoBuy(lottoCost) {
    const [lottoCount, lottoArr] = this.generateLottoNum.lottoDetail(lottoCost);
    MissionUtils.Console.print("");
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoArr.map((lotto) => {
      MissionUtils.Console.print(lotto);
    });
    this.userLotto = lottoArr;
    this.sayWinningBonus.sayWinning();
  }
}

module.exports = lottoProcess;
