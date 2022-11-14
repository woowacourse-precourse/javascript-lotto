const { getArrayToCustomMessage, pickUniqueNumbersInRange, print } = require('./lib/Utils');
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
    this.#lottoList.forEach((lotto, index) => {
      const message = getArrayToCustomMessage(lotto);
      const endChar = this.isSameIndex(index) ? '\n' : '';
      print(message + endChar);
    });

    return this;
  }

  isSameIndex(index) {
    const { length } = this.#lottoList;
    return length - 1 === index;
  }

  getLottoList() {
    return this.#lottoList;
  }
}

module.exports = Lottery;
