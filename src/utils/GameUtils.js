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
}

module.exports = GameUtils;
