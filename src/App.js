const { Random, Console } = require("@woowacourse/mission-utils");

import User from "./User";
import Lotto from "./Lotto";
import LottoMachine from "./LottoMachine";

class App {
  play() {
    let user = new User();
    let lottoMachine = new LottoMachine();
    user.inputAmount();
    for (let i = 0; i < user.purchasableLotto(); i++) {
      let lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      user.addLotto(lotto);
    }
    user.printLottos();
    lottoMachine.inputWinningNumber();
    user.addWinStats(lottoMachine.lotteryResult(user.getLottos));
    user.printWinStats();
  }
}

const app = new App();
app.play();

module.exports = App;
