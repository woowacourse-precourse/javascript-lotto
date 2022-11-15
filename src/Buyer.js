const Io = require("./utils/Io");

const Buyer = class {
  #io;
  constructor() {
    this.#io = Io;
  }
  outputView({ buyLottoNumber, lottos }) {
    this.#io.print(`\n${buyLottoNumber}개를 구매했습니다.`);
    lottos.forEach((lotto) => this.#io.print(`[${lotto.join(", ")}]`));
  }
};

module.exports = Buyer;
