const MissionUtils = require("@woowacourse/mission-utils");

class WinningCalculator {
  #lottos;
  #winningLotto;
  #rank;

  constructor(lottos, winningLotto) {
    this.#lottos = lottos;
    this.#winningLotto = winningLotto;
    this.#rank = Array.from({ length: 5 }, () => 0);
    this.calculateRank();
  }

  getMatchNumber(numbers, winningNumbers) {
    return numbers.filter((number) => winningNumbers.includes(number));
  }

  calculateRank() {
    this.#lottos.map((lotto) => {
      const matchNumber = this.getMatchNumber(lotto.numbers, this.#winningLotto.numbers);

      if (matchNumber.length === 6) {
        this.#rank[0]++;
      }
      if (matchNumber.length === 5 && lotto.numbers.includes(this.#winningLotto.bonusNumber)) {
        this.#rank[1]++;
      }
      if (matchNumber.length === 5 && !lotto.numbers.includes(this.#winningLotto.bonusNumber)) {
        this.#rank[2]++;
      }
      if (matchNumber.length === 4) {
        this.#rank[3]++;
      }
      if (matchNumber.length === 3) {
        this.#rank[4]++;
      }
    });
  }

  printRank() {
    MissionUtils.Console.print(this.#rank.join(", "));
  }
}

module.exports = WinningCalculator;
