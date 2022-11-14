const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoNumber = require("./LottoNumber");

class Lottos {
  #lottos;
  #amount;

  constructor(amount) {
    this.#lottos = [];
    this.#amount = amount;
    this.#generateNumbers();
  }

  size() {
    return this.#lottos.length;
  }

  toString() {
    return this.#lottos.map((lotto) => lotto.toString()).join("\n");
  }

  #getLottoNumber() {
    return LottoNumber.generate();
  }

  #generateNumbers() {
    while (this.#lottos.length < this.#amount) {
      const lottoNumber = this.#getLottoNumber();
      const lotto = new Lotto(lottoNumber);

      this.#addLotto(lotto);
    }

    return this.#lottos;
  }

  #addLotto(lotto) {
    if (this.#isContainLotto(lotto)) return;

    this.#lottos.push(lotto);
  }

  #isContainLotto(newLotto) {
    this.#lottos.forEach((lotto) => {
      if (lotto.isEqual(newLotto)) return true;
    });
  }
}

module.exports = Lottos;
