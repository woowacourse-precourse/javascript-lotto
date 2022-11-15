const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoMachine {
  #lottoList;

  constructor(purchaseMoney) {
    this.#lottoList = this.purchaseLotto(purchaseMoney);
  }

  getLottoList() {
    return this.#lottoList; 
  }

  makeLotto() {
    const lotto = new Set();
    while(lotto.size < 6){
      lotto.add(MissionUtils.Random.pickNumberInRange(1, 45));
    }
    return [...lotto];
  }

  purchaseLotto(purchaseMoney) {
    const purchasedLottoNumber = parseInt(purchaseMoney / 1000);
    return Array.from(Array(purchasedLottoNumber),() => new Lotto(this.makeLotto()));
  }
}

module.exports = LottoMachine;