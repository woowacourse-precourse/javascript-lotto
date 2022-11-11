const MissionUtils = require("@woowacourse/mission-utils");

class BuyLotto {
  constructor() {
    this.price = 0;
    this.lottoCount = 0;
  }

  getLotto() {
    MissionUtils.Console.readLine("구입 금액 입력.", (pay) => {
      this.price = Number(pay);
      this.lottoCount = this.price/1000;
      MissionUtils.Console.print(`${this.lottoCount}개 구입`)
    });
  }
}
