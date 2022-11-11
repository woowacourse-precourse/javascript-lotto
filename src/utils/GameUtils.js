const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");

class GameUtils {
  constructor() {}

  static getRandomNumberArray() {
    let randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumbers.sort((a, b) => Number(a) - Number(b));
    return randomNumbers;
  }

  static getLottos(count) {
    let lottos = [];

    for (let i = 0; i < Number(count); i++) {
      const lotto = new Lotto(this.getRandomNumberArray());
      lottos.push(lotto);
    }

    return lottos;
  }

  static getWinnigNumbers(inputString) {
    const winningNumberArray = inputString.split(",");

    return winningNumberArray;
  }
  static getRank(lottoNumber, winningNumber, bonusNumber) {
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
    if (lottoNumber.includes(bonusNumber)) return true;
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
