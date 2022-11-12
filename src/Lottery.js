const { print, pickUniqueNumbersInRange } = require('./lib/Utils');

class Lottery {
  #lottoList = [];

  lottoCount = 0;

  constructor(lottoCount) {
    this.lottoCount = lottoCount;
  }

  publishLottoList() {
    const lottos = [];

    for (let index = 0; index < this.lottoCount; index += 1) {
      const lotto = pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(lotto.sort((a, b) => a - b));
    }

    this.lottoList = lottos;

    return this;
  }

  printLottoList() {
    this.lottoList.forEach((lotto) => {
      const lottoMessage = Lottery.getLottoPrintMessage(lotto);
      print(lottoMessage);
    });

    print('\n');
  }

  static getLottoPrintMessage(lotto = []) {
    const { length } = lotto;
    let message = '';
    const open = '[';
    const close = ']';

    lotto.forEach((number, index) => {
      if (index === 0 || index === length) {
        message += number;
        return;
      }
      message += `, ${number}`;
    });

    return open + message + close;
  }

  getLottoList() {
    return this.#lottoList;
  }
}

module.exports = Lottery;
