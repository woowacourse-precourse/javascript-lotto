const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoMachine = require("./LottoMachine");
const LottoStore = require("./LottoStore");

class App {
  #lottoMachine = new LottoMachine();
  #lottoStore = new LottoStore();
  #console = MissionUtils.Console;
  lottos = [];

  constructor() {

  }

  play() {
    this.buyLottos();
  }

  buyLottos() {
    const numbersOfLottos = this.#lottoStore.sellLottos();
    console.log(numbersOfLottos);
    for (let i = 0; i < numbersOfLottos; i++) {
      let lotto = new Lotto(this.#lottoMachine.generate());
      this.lottos.push(lotto);
    }
  }
}

module.exports = App;
