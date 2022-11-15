const CONSTANT = require("../assets/constant");
const Lotto = require("./Lotto");
const Validate = require("../domain/Validate");

class LottoModel {
  #lottos;
  #winNumber;
  #bonuse;

  constructor(money) {
    Validate.money(money);
    this.#lottos = this.buyLottos(money);
    this.#bonuse = "";
    this.#winNumber = "";
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

  get result() {
    const resultList = [];

    this.lottos.forEach((lotto) =>
      resultList.push(lotto.getResult(this.#winNumber, this.#bonuse))
    ); // 결과값은 맞은 갯수의 집합으로 이뤄진 배열이다.
    return resultList;
  }

  buyLottos(money) {
    const buyAmount = money / CONSTANT.LOTTO_PRICE;
    let lottoArray = [];

    while (lottoArray.length < buyAmount) {
      lottoArray.push(new Lotto());
    }
    return lottoArray;
  }
}
module.exports = LottoModel;
