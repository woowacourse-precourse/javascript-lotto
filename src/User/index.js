/**
 * @Class User
 * @description: 로또를 구매하는 유저를 나타내는 클래스
 */
class User {
  #lottos = [];

  constructor() {}

  /**
   * @param {Number Array} lotto
   * @description 로또번호를 받아서 유저의 로또목록에 추가한다
   */
  addLotto(lotto) {
    this.#lottos.push(lotto);
  }

  /**
   * @param {Number Array} winning
   * @param {Number} bonusNum
   * @description 로또 당첨번호와 보너스번호를 받아서 유저의 로또목록에 당첨여부를 체크한다
   */
  getLottosStatic(winning, bonusNum) {
    let prize = [0, 0, 0, 0, 0, 0];
    for (let lotto of this.#lottos) {
      let idx = lotto.isPrize(winning, bonusNum) - 1;
      if (!isNaN(idx)) prize[idx]++;
    }
    console.log(prize);
  }

  /**
   * @returns {Number Array} 로또목록을 반환한다
   */
  get showLottos() {
    for (let lotto of this.#lottos) lotto.getLotto;
  }
}

module.exports = User;
