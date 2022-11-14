const { Random, Console } = require("@woowacourse/mission-utils");

import User from "./User";
import Lotto from "./Lotto";
import LottoMachine from "./LottoMachine";

class App {
  play() {
    let user = new User();
    let lottoMachine = new LottoMachine();
    let lotto = new Lotto();
    user.inputAmount();
  }
}

module.exports = App;
