const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Purchase = require("./Purchase");
const Winning = require("./Winning");
class App {
  lottoIssuance = (count) => {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    const lottoNumber = Array.from({ length: count }, () => {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const ascending = randomNumber.sort((a, b) => a - b);
      return new Lotto(ascending);
    });
    lottoNumber.forEach((num) => {
      MissionUtils.Console.print(num.getNumbers());
    });
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
