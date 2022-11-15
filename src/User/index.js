const { LOTTO_PRICE } = require('../Constants/number');
const Lotto = require('../Lotto');
const IO = require('../IOControl');
const Utils = require('../Utils');
/**
 * @Class User
 * @description: 로또를 구매하는 유저를 나타내는 클래스
 */
class User {
  #lottoList = [];
  constructor() {}
  /**
   * @param {Number Array} lotto
   * @description 로또번호를 받아서 유저의 로또목록에 추가한다
   */
  buyLottos(money) {
    let lottoCnt = money / LOTTO_PRICE;
    IO.printLottoBuy(lottoCnt);
    for (let i = 0; i < lottoCnt; i++) {
      let lotto = new Lotto(Utils.genRndNums());
      this.#lottoList.push(lotto);
      IO.printLotto(lotto.getLotto());
    }
  }

  getLottoList() {
    return this.#lottoList;
  }
}

module.exports = User;
