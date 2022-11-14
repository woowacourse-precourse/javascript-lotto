const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
class LottoBuyer {
  money;
  lottoAmount;
  lottoArray = new Array();
  constructor(money) {
    let numberChecker = /^[0-9]+$/;
    if (!numberChecker.test(money)) {
      throw new Error("[ERROR] 금액은 숫자만으로 이루어져야 합니다.");
    }
    money = parseInt(money);
    if (money % 1000 !== 0) {
      throw new Error(
        "[ERROR] 로또 구매 금액 단위는 1,000원 단위로 이루어져야 합니다."
      );
    }
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
