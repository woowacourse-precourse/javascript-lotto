const { print } = require('../utils/Utils');

class LottoGameView {
  printLottoCount(count) {
    print(`${count}개를 구매했습니다.`);
  }

  printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      print(this.toString(lotto));
    });
  }

  toString(arr) {
    return `[${arr.join(', ')}]`;
  }
}

module.exports = LottoGameView;
