const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO_CONSTANT } = require('./utils/constants');
const Lotto = require('./Lotto');

class LottoSystem {
  getLottoes(count) {
    const lottoList = LottoSystem.getLottoList(count);
    LottoSystem.printPurchasingMessage(lottoList);
    return lottoList;
  }

  static getLottoList(count) {
    const lottoList = new Array(count).fill([]);
    return lottoList.map(() => this.createLotto());
  }

  static createLotto() {
    return new Lotto(LottoSystem.createLottoNumbers());
  }

  static createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_CONSTANT.lowest,
      LOTTO_CONSTANT.highest,
      LOTTO_CONSTANT.numbersLength
    );
  }

  static printPurchasingMessage(lottoList) {
    Console.print(`\n${lottoList.length}개를 구매했습니다.`);
  }
}

module.exports = LottoSystem;
