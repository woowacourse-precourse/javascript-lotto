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
    this.#printLottoList(numbersOfLotto);
  }

  getEachLottoArray() {
    const lottoArray = this.utils.randomSelectWithoutOverlap();
    this.lotto.validate(lottoArray)
    return lottoArray;
  }

  #printLottoList(numbersOfLotto) {
    for (let count = 0; count < numbersOfLotto; count++) {
      const lottoArray = this.getEachLottoArray()
      Console.print(`[${lottoArray.join(', ')}]`);
      this.lottoArray.push(this.getEachLottoArray());
    }
    Console.print("");
  }

  getLottoArray() {
    return this.lottoArray;
  }
}

module.exports = BuyLotto;