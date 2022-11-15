const { LOTTO_INFO, RANK_TO_ORDINAL, RESULT } = require("./Constants");
const { Console } = require("@woowacourse/mission-utils");

class Details {
  #details = {};
  #bonusNumber;
  #winningNumbers;

  constructor(lottos, winning, bonus) {
    this.#winningNumbers = winning.getNumbers();
    this.#bonusNumber = bonus.getNumber(); // 배열
    this.getLottosRanks(lottos);
  }

  getDetails() {
    return this.#details;
  }

  getLottosRanks(lottos) {
    this.#details = lottos.reduce((acc, lotto) => {
      let rank = this.getIssueRank(lotto);
      if (rank < 6) {
        // 사실 if 문을 축약해서 쓴건데.... 이걸 indent 하나로 볼 수 있을까?
        acc[rank] = (acc[rank] || 0) + 1;
      }
      return acc;
    }, {});
  }

  getIssueRank(lotto) {
    let rank = LOTTO_INFO.number_of_numbers + 2;
    let duplicatedCount = this.getNumberOfDuplicatedNumbers(lotto);

    if (
      this.checkBonusNumber(lotto, duplicatedCount) ||
      duplicatedCount === 6
    ) {
      rank--;
    }
    return rank - duplicatedCount;
  }

  getNumberOfDuplicatedNumbers(lotto) {
    let lottoNumbers = lotto.getNumbers();

    return lottoNumbers.filter((number) => {
      return this.#winningNumbers.includes(number);
    }).length;
  }

  checkBonusNumber(lotto, duplicatedCount) {
    if (
      duplicatedCount === LOTTO_INFO.number_of_numbers - 1 &&
      this.hasBonusNumber(lotto)
    ) {
      return true;
    }
    return false;
  }

  hasBonusNumber(lotto) {
    return lotto.isBonusNumberDuplicated(this.#bonusNumber);
  }

  print() {
    Object.keys(RANK_TO_ORDINAL)
      .sort((a, b) => b - a)
      .forEach((rank) => {
        Console.print(RESULT[RANK_TO_ORDINAL[rank]](this.#details[rank] || 0));
      });
  }
}

module.exports = Details;
