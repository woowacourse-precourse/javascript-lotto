const { Console } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const ValidateInput = require("./ValidateInput");
const Lotto = require("./Lotto");

class BuyLotto {
  constructor() {
    this.lottoArray = [];
    this.validateInput = new ValidateInput();
    this.utils = new Utils();
    this.lotto = new Lotto();
  }

  buyLotto(numbersOfLotto) {
    Console.print(`\n${numbersOfLotto}개를 구매했습니다.`);
    for (let i = 0; i < numbersOfLotto; i++) {
      this.lottoArray.push(this.getEachLottoArray());
    }
    this.#printLottoList();
  }

  getEachLottoArray() {
    const lottoArray = this.utils.randomSelectWithoutOverlap();
    this.lotto.validate(lottoArray)
    return lottoArray;
  }

  #printLottoList() {
    for (const lotto of this.lottoArray) {
      Console.print(lotto);
    }
    Console.print("");
  }

  getLottoArray() {
    return this.lottoArray;
  }
}

module.exports = BuyLotto