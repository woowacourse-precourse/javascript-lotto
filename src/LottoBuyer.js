const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
class LottoBuyer {
  money;
  lottoAmount;
  lottoArray = new Array();
  constructor(money) {
    money = parseInt(money);

    this.money = money;
    this.lottoAmount = money / 1000;
  }

  buyLotto() {
    MissionUtils.Console.print(`${this.lottoAmount}개를 구매했습니다.`);
    for (
      let lottoAmountCount = 0;
      lottoAmountCount < this.lottoAmount;
      lottoAmountCount++
    ) {
      let boughtLotto = new Lotto(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
      this.lottoArray.push(boughtLotto);
      boughtLotto.printLottoNumbers();
    }
  }

  getLottoArray() {
    return this.lottoArray;
  }
}
module.exports = LottoBuyer;
