const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");

class GameUtils {
  constructor() {}

  static getRandomNumberArray = () => {
    let randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumbers.sort((a, b) => Number(a) - Number(b));
    return randomNumbers;
  };
}

module.exports = GameUtils;
