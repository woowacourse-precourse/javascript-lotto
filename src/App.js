const MissionUtils = require("@woowacourse/mission-utils");
const BuyLotto = require("./modules/BuyLotto");
class App {
  play() {
    //로또 구입 금액을 입력하면 해당하는 로또를 발행한다.
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (price) => {
      const buyLotto = new BuyLotto(price);
      MissionUtils.Console.print(`${buyLotto.nTimes()}개를 구매했습니다.`);
    });
    MissionUtils.Console.close();
  }
}

module.exports = App;
