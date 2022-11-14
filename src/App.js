const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoFactory = require("./LottoFactory");
const Lottos = require("./Lottos");
const Management = require("./Management");
const Payment = require("./Payment");
const Status = require("./Status");

class App {
  makeLottos = (count) => {
    for (let i = 0; i < count; i++) {
      this.lottos.add(new Lotto(this.lottoFactory.makeLotto()));
    }
    this.lottos.print();
    this.management.WinNumberQuery(this.makeStatus);
  };

  makeStatus = () => {
    this.lottos.get().forEach((lotto) => {
      this.status.add(this.management.checkNum(lotto.get()));
    });
    this.status.countYield(this.payment.getMoney());
    this.status.print();
    MissionUtils.Console.close();
  };

  play() {
    this.payment = new Payment();
    this.lottos = new Lottos();
    this.lottoFactory = new LottoFactory();
    this.management = new Management();
    this.status = new Status();
    this.payment.query(this.makeLottos);
  }
}

module.exports = App;
