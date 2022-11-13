const MissionUtils = require("@woowacourse/mission-utils");
const COMPUTER_NUMBER = [];

class RandomNumber {
  constructor(computernumbers) {
    this.computerNumbers = computernumbers;
  }

  randomComputerNumber(purchaseNumber) {
    while (COMPUTER_NUMBER.length < purchaseNumber) {
      const NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      COMPUTER_NUMBER.push(NUMBER);
    }
    this.computerNumbers = COMPUTER_NUMBER;
  }
}
module.exports = RandomNumber;
