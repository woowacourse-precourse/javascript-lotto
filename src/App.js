const Lotto = require("./Lotto");
const LottoFactory = require("./LottoFactory");
const Lottos = require("./Lottos");
const Management = require("./Management");
const Payment = require("./Payment");
const Status = require("./status");

class App {
  constructor() {
    this.payment = new Payment();
    this.lottos = new Lottos();
    this.lottoFactory = new LottoFactory();
  }

  makeLottos = (count) => {
    for (let i = 0; i < count; i++) {
      this.lottos.add(new Lotto(this.lottoFactory.makeLotto()));
    }
    this.lottos.print();
  };

  play() {
    this.payment.query(this.makeLottos);
  }
}

module.exports = App;
