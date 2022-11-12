const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoCompany {
  #lottoPrice;

  #winningNumbers;

  #bonusNumber;

  constructor(lottoPrice) {
    this.#lottoPrice = lottoPrice;
  }

  publishLottos(money) {
    const lottoCount = money / this.#lottoPrice;
    const lottos = Array(lottoCount);
    for (let i = 0; i < lottoCount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      lottos[i] = new Lotto(numbers);
    }
    return lottos;
  }

  makeWinningNumbers() {}

  makeBonusNumber() {}

  notifyLottoResult() {}

  static countSameNumbersOfAscSortedArrays(ascSortedNums1, ascSortedNums2) {
    let i = 0;
    let j = 0;
    let count = 0;
    while (i < ascSortedNums1.length && j < ascSortedNums2.length) {
      if (ascSortedNums1 === ascSortedNums2[j]) {
        count += 1;
        i += 1;
        j += 1;
      }
      if (ascSortedNums1 < ascSortedNums2[j]) i += 1;
      if (ascSortedNums1 > ascSortedNums2[j]) j += 1;
    }
    return count;
  }
}

module.exports = LottoCompany;
