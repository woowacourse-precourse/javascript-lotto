const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoCompany {
  #lottoPrice;

  #winningMoney;

  #winningNumbers;

  #bonusNumber;

  constructor(lottoPrice, winningMoney) {
    this.#lottoPrice = lottoPrice;
    this.#winningMoney = winningMoney;
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

  makeWinningNumbers() {
    Console.print("당첨 번호를 입력해 주세요");
    Console.readLine("", (input) => {
      this.#winningNumbers = input.split(",").map((elem) => Number(elem));
    });
  }

  makeBonusNumber() {
    Console.print("보너스 번호를 입력해 주세요");
    Console.readLine("", (input) => {
      this.#bonusNumber = Number(input);
    });
  }

  checkResult(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const sameNumberCount = LottoCompany.countSameNumbersOfAscSortedArrays(
      lottoNumbers,
      this.#winningNumbers
    );
    const isBonus = lottoNumbers.includes(this.#bonusNumber);
    return this.winningTemplate(sameNumberCount, isBonus);
  }

  // eslint-disable-next-line class-methods-use-this
  winningTemplate(count, bonus) {
    if (count === 6) return 1;
    if (count === 5 && bonus) return 2;
    if (count === 5) return 3;
    if (count === 4) return 4;
    if (count === 3) return 5;
    return -1;
  }

  winningMoney(winningRank) {
    return this.#winningMoney[winningRank - 1];
  }

  printReportByResults(winningResults) {}

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
