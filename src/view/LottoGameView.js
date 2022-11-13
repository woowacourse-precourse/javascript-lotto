const { print } = require('../utils/Utils');

class LottoGameView {
  static printLottoCount(count) {
    print(`${count}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      print(`[${lotto.join(', ')}]`);
    });
  }
}

module.exports = LottoGameView;
