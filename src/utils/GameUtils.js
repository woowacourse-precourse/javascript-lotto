const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");
const { ConstNumber } = require("../Constant");

class GameUtils {
  constructor() {}

  static getRandomNumberArray() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    randomNumbers.sort((a, b) => Number(a) - Number(b));

    return randomNumbers;
  }

  static getLottos(count) {
    const lottos = [];

    for (let i = 0; i < Number(count); i++) {
      const lotto = new Lotto(this.getRandomNumberArray());

      lottos.push(lotto);
    }

    return lottos;
  }

  static getWinnigNumbersArray(inputString) {
    const winningNumberArray = inputString.split(",");

    return winningNumberArray;
  }

  static getTotalRankArray(lottos, winningNumber, bonusNumber) {
    const rankArray = [0, 0, 0, 0, 0];

    winningNumber = winningNumber.map((v) => String(v));

    lottos.forEach((lotto) => {
      const rank = this.getRankOfLotto(
        lotto.getNumbers(),
        winningNumber,
        bonusNumber
      );

      if (rank) rankArray[ConstNumber.RANK_ARRAY_SIZE - Number(rank)] += 1;
    });

    return rankArray;
  }

  static getYield(ranks, pay) {
    const reward = [5000, 50000, 1500000, 30000000, 2000000000];
    let totalReward = 0;

    reward.forEach((rw, i) => {
      totalReward += ranks[i] * rw;
    });

    return ((totalReward / Number(pay)) * ConstNumber.PERCENTAGE_NUM).toFixed(
      1
    );
  }

  static getRankOfLotto(lottoNumber, winningNumber, bonusNumber) {
    const sameNumberCount = this.getSameNumberCount(lottoNumber, winningNumber);
    const isHaveBonusNumber = this.getIsHaveBonusNumber(
      lottoNumber,
      bonusNumber
    );

    return this.calcRank(sameNumberCount, isHaveBonusNumber);
  }

  static getSameNumberCount(lottoNumber, winningNumber) {
    let sameNumberCount = 0;

    lottoNumber.forEach((number) => {
      if (winningNumber.includes(number)) sameNumberCount += 1;
    });

    return sameNumberCount;
  }

  static getIsHaveBonusNumber(lottoNumber, bonusNumber) {
    if (lottoNumber.includes(Number(bonusNumber))) return true;
    return false;
  }

  static calcRank(sameNumberCount, isHaveBonusNumber) {
    if (sameNumberCount === 5) {
      return isHaveBonusNumber ? 2 : 3;
    }
    if (sameNumberCount === 3) return 5;
    if (sameNumberCount === 4) return 4;
    if (sameNumberCount === 6) return 1;
  }
}

module.exports = GameUtils;
