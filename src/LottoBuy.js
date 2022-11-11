const { Console } = require("@woowacourse/mission-utils");
const { INPUT, PRINT, LOTTO, EXCEPTION } = require("./lib/library");
const Lotto = require("./Lotto");

class LottoBuy {
  #lottos = [];

  main() {
    Console.readLine(INPUT.BUY, this.inputPurchasePrice.bind(this));
    return this.#lottos;
  }

  inputPurchasePrice(price) {
    this.validate(price);
    this.createMyLottos(price / LOTTO.PRICE);
    this.printLottos();
    return;
  }

  validate(price) {
    if (price % LOTTO.PRICE !== 0)
      throw EXCEPTION("올바른 가격을 입력해 주세요.");
  }

  createMyLottos(count) {
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto();
      this.#lottos.push(lotto);
    }
    return;
  }

  printLottos() {
    Console.print(PRINT.BUY(this.#lottos.length));
    this.#lottos.forEach((lotto) => {
      lotto.printNumbers();
    });
    return;
  }

  getMyLottos() {
    return this.#lottos;
  }
}

module.exports = LottoBuy;
