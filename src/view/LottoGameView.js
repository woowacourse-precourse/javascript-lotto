const { print } = require('../utils/Utils');

class LottoGameView {
  static printLottoCount(count) {
    print(`${count}개를 구매했습니다.`);
  }
}

module.exports = LottoGameView;
