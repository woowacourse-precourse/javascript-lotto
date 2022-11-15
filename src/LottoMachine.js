const Lotto = require('./Lotto');
const { Console, Random } = require('@woowacourse/mission-utils');
const { ERROR, MESSAGE } = require('./Constants');

class LottoMachine {
  constructor() {
    this.lottoPrice = 1000;
    this.countOfLottos = 0;
    this.lottoList = [];
  }

  makeLottoList(userMoney) {
    for (let count = 1; count <= this.countOfLottos; count++) {
      const LottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(LottoNumbers);
      this.lottoList.push(lotto);
    }

    return this.lottoList;
  }

  countLottos(userMoney) {
    if (this.isValidMoney(userMoney)) {
      this.countOfLottos = userMoney / this.lottoPrice;
    }

    return this.countOfLottos;
  }

  isValidMoney(userMoney) {
    if (userMoney % this.lottoPrice !== 0) {
      throw new Error(ERROR.NOT_THOUSANDS);
    }

    if (userMoney < this.lottoPrice) {
      throw new Error(ERROR.LESS_MONEY);
    }

    return true;
  }
}

module.exports = LottoMachine;
