const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoCompany {
  #lottoPrice;

  #winningMoney;

  #winningNumbers;

  #bonusNumber;

  #winningIntruction;

  constructor(lottoPrice, winningMoney) {
    this.#lottoPrice = lottoPrice;
    this.#winningMoney = winningMoney;
  }

  publishLottos(money) {
    this.validateMoney(money);
    const lottoCount = money / this.#lottoPrice;
    const lottos = Array(lottoCount);
    for (let i = 0; i < lottoCount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      lottos[i] = new Lotto(numbers);
    }
    return lottos;
  }

  validateMoney(money) {
    const moneyNumber = Number(money);
    if (!Number.isInteger(moneyNumber) && moneyNumber > 0) {
      throw new Error("[ERROR] 0 이상 정수를 입력해주세요.");
    }
    if (moneyNumber % this.#lottoPrice !== 0) {
      throw new Error(
        "[ERROR] 로또 가격과 나누어 떨어지는 값을 입력해야 합니다."
      );
    }
  }

  makeWinningNumbers() {
    Console.print("당첨 번호를 입력해 주세요");
    Console.readLine("", (input) => {
      this.validateWinningNumbers(input);
      this.#winningNumbers = input.split(",").map((elem) => Number(elem));
    });
  }

  // eslint-disable-next-line class-methods-use-this
  validateWinningNumbers(input) {
    const numbers = input.split(",").map((elem) => Number(elem));
    if (
      !numbers.every((elem) => Number.isInteger(elem) && elem > 0 && elem < 46)
    ) {
      throw new Error("[ERROR] 1이상 45이하 정수만을 입력해야합니다.");
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 정수인 숫자를 6개 입력해야합니다.");
    }
  }

  makeBonusNumber() {
    Console.print("보너스 번호를 입력해 주세요");
    Console.readLine("", (input) => {
      this.validateBonusNumber(input);
      this.#bonusNumber = Number(input);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  validateBonusNumber(input) {
    const number = Number(input);
    if (!Number.isInteger(number) || !(number > 0 && number < 46)) {
      throw new Error("[ERROR] 1이상 45이하 정수를 입력해야합니다.");
    }
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

  // eslint-disable-next-line class-methods-use-this
  rankToResult(winningRank) {
    if (winningRank === 1) return [6, false];
    if (winningRank === 2) return [5, true];
    if (winningRank === 3) return [5, false];
    if (winningRank === 4) return [4, false];
    if (winningRank === 5) return [3, false];
    return null;
  }

  winningMoney(winningRank) {
    return this.#winningMoney[winningRank - 1];
  }

  printReportByRanks(ranks) {
    const rankCounts = Array(5).fill(0);
    ranks.forEach((rank) => {
      rankCounts[rank - 1] += 1;
    });

    let reports = "당첨 통계\n---\n";
    for (let i = 4; i > -1; i -= 1) {
      reports += `${this.rankToResult(i + 1)[0]}개 일치`;
      if (i === 1) reports += ", 보너스 볼 일치";
      reports += `(${this.#winningMoney[i]}원) - ${rankCounts[i]}개\n`;
    }
    Console.print(reports);
  }

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
