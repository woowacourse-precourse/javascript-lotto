const MissionUtils = require('@woowacourse/mission-utils');
const LottoGenerator = require('./LottoGenerator');

class BuyLotto {
  #lotooNumber;
  constructor() {
    this.#lotooNumber = this.getBuyLottoMoney();
  }
}

module.exports = BuyLotto;
