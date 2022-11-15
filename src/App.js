const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoMachine = require("./LottoMachine");
const LottoStore = require("./LottoStore");
const Prize = require("./Prize");

class App {
  #lottoMachine = new LottoMachine();
  #lottoStore = new LottoStore();
  #console = MissionUtils.Console;
  lottos = [];

  constructor() {

  }

  play() {
    this.buyLottos();
    this.takeMoney();
  }

  buyLottos() {
    const numberOfLottos = this.#lottoStore.sellLottos();
    for (let i = 0; i < numberOfLottos; i++) {
      let lotto = new Lotto(this.#lottoMachine.generateNumbers());
      this.lottos.push(lotto);
    }
  }

  takeMoney() {
    const prize = new Prize(this.lottos);
    prize.calcualteWins();
    prize.announceResult();
    prize.calcualteResult();
    this.earningsRate(prize);
  }

  earningsRate(prize) {
    const payment = this.#lottoStore.payment;
    const prizeMoney = prize.calcualteResult();
    const earningRate = (prizeMoney/payment*100);
    this.#console.print(`총 수익률은 ${earningRate}%입니다.`);
    this.#console.close();
  }
}

module.exports = App;
