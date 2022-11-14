const { pickUniqueNumbersInRange, print } = require('./lib/Utils');
const { LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER, LOTTO_NUMBER } = require('./lib/Constants');

class Lottery {
  #lottoList = [];

  lottoCount = 0;

  constructor(lottoCount) {
    this.lottoCount = lottoCount;
  }

  pick() {
    const lottos = [];

    for (let index = 0; index < this.lottoCount; index += 1) {
      const lotto = pickUniqueNumbersInRange(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBER);
      lottos.push(lotto.sort((a, b) => a - b));
    }

    this.#lottoList = lottos;

    return this;
  }

  printList() {
    this.#lottoList.forEach((lotto) => {
      const lottoMessage = Lottery.getMessage(lotto);
      print(lottoMessage);
    });

    print('\n');

    return this;
  }

  static getMessage(lotto = []) {
    const stringLotto = JSON.stringify(lotto);
    return stringLotto.replace(/,/gi, ', ');
  }

  getLottoList() {
    return this.#lottoList;
  }
}

module.exports = Lottery;
