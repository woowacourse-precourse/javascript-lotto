const { Console } = require("@woowacourse/mission-utils");
const { INPUT, PRINT, LOTTO, EXCEPTION } = require("./lib/library");
const Lotto = require("./Lotto");

class LottoBuy {
  #lottos = [];

  inputPurchasePrice(price) {
    this.validate(price);
    this.createMyLottos(price / LOTTO.PRICE);
    Console.print(PRINT.BUY(price / LOTTO.PRICE));
    this.printLottos(this.#lottos);
    return;
  }

  validate(price) {
    if (price === 0) throw EXCEPTION("1000원 이상의 숫자를 입력하세요.");
    if (price < 1000) throw EXCEPTION("1000원 이상의 숫자를 입력하세요.");
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

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      lotto.printNumbers();
    });
    return;
  }

  getMyLottos() {
    return this.#lottos;
  }
}

module.exports = LottoBuy;
