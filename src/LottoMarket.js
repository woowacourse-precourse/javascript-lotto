const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { Console, Random } = MissionUtils;
const constants = require("./Constants");
const { UNIT } = require("./Constants");

class LottoMarket {
  purchaseLotto(money) {
    let userLottos = [];
    while (userLottos.length < parseInt(money / UNIT)) {
      userLottos.push(new Lotto(this.drawLottery()));
    }
    if (userLottos.length === 0)
      throw new Error("[ERROR] 올바르지 않은 금액 입력입니다.");
    this.showLottoes(userLottos);
    return userLottos;
  }

  showLottoes(buyingLottoes) {
    Console.print(`${buyingLottoes.length}개를 구매했습니다.`);
    let Lottoes = buyingLottoes.reduce((acc, cur) => {
      Console.print(`[${cur.getNumbers().join(', ')}]`)
    }, []);
  }

  drawLottery() {
    let lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNums.sort((a, b) => a - b);
    return lottoNums;
  }
}

module.exports = LottoMarket;
