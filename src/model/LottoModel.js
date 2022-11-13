const CONSTANT = require("../assets/constant");
const Lotto = require("./Lotto");
const Validate = require("../domain/Validate");
const Utils = require("../assets/Utils");

class LottoModel {
  #lottos = [];
  #winNumber = "";
  #bonuse = "";

  constructor(money) {
    Validate.money(money);
    this.#lottos = this.buyLottos(money);
  }

  get lottos() {
    return this.#lottos;
  }

  get winNumber() {
    return this.#winNumber;
  }

  set winNumber(winNumber) {
    Validate.selectWinNumber(winNumber);
    this.#winNumber = winNumber;
  }

  get bonuse() {
    return this.#bonuse;
  }

  set bonuse(number) {
    Validate.bonuseNumber(number, this.#winNumber);
    this.#bonuse = number;
  }

  buyLottos(money) {
    const buyAmount = money / CONSTANT.LOTTO_PRICE;
    let lottoArray = [];

    while (lottoArray.length < buyAmount) {
      lottoArray.push(new Lotto());
    }
    return lottoArray;
  }

  // evaluateResult() {
  //   const winNumberArray = Utils.stringToArray(this.#winNumber);
  //   const matchedArray = [];

  //   this.#lottos.forEach((lotto, index) => {
  //     const matchedResult = lotto.resultMatch(winNumberArray, this.#bonuse);
  //     matchedArray.push(matchedResult.length); //
  //   });
  // }
}
module.exports = LottoModel;
