const { Random } = require("@woowacourse/mission-utils");

class WinningNumber {
  generateWinningNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = WinningNumber;
