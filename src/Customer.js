const Lotto = require("./Lotto");
const profitList = require("./utils/const/profit");
const printMessage = require("./utils/const/print");
const MissionUtils = require("@woowacourse/mission-utils");

class Customer {
  purchaseMoney = 0;
  lottoList = [];
  profit = 0;

  buyLotto(money) {
    this.purchaseMoney = money;
    const lottoCount = Number(money / 1000);
    MissionUtils.Console.print(printMessage.purchaseQuentity(lottoCount));
    for (let i = 0; i < lottoCount; i++) {
      this.lottoList.push(new Lotto());
    }
  }
  allLottoConfirm(winninglottoNumber) {
    const lottoConfirmList = this.lottoList.map((lotto) => {
      const result = lotto.winningConfrim(winninglottoNumber);
      this.profitCheck(result);
      return result;
    });
    return lottoConfirmList;
  }
  profitCheck(winningResult) {
    const { correct, isBonusCorrect } = winningResult;
    if (isBonusCorrect && correct === 5) return (this.profit += profitList[8]);
    return (this.profit += profitList[correct]);
  }
}
module.exports = Customer;
