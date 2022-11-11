const MissionUtils = require("@woowacourse/mission-utils");
const Exceptions = require("./Exception");

let exception = new Exceptions();

class BuyLotto {
  constructor() {
    this.price = 0;
    this.lottoCount = 0;
  }

  getLotto() {
    MissionUtils.Console.readLine("구입 금액 입력.", (pay) => {
      exception.checkInputNotNumber(pay);
      exception.checkPriceNotThousands(pay);
      this.price = Number(pay);
      this.lottoCount = this.price / 1000;
      MissionUtils.Console.print(`${this.lottoCount}개 구입`);
      this.printLotto(this.lottoCount);
    });
  }

  printLotto(lottoCount) {
    for (let index = 0; index < lottoCount; index++) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort((first, second) => first - second);
      MissionUtils.Console.print(lotto);
    }
  }
}
