const MissionUtils = require("@woowacourse/mission-utils");
const Purchase = require("./Purchase");
const Issuance = require("./Issuance");
class App {
  lottoIssuance = (count) => {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    const lottoNumber = Array.from({ length: count }, () =>
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    );
    MissionUtils.Console.print(lottoNumber);
  };
  lottoPurchase = () => {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (purchase) => {
      new Purchase(purchase);
      this.lottoIssuance(parseInt(purchase, 10) / 1000);
    });
  };
  play() {
    this.lottoPurchase();
  }
}

module.exports = App;
