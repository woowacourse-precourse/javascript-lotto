const MissionUtils = require("@woowacourse/mission-utils");
const LottoNumber = require("./LottoNumber");
const COMPUTER_NUMBER = [];

class RandomNumber {
  constructor(computernumbers) {
    this.computerNumbers = computernumbers;
    this.lottoNumber = new LottoNumber();
  }

  randomComputerNumber(purchaseNumber) {
    while (COMPUTER_NUMBER.length < purchaseNumber) {
      const NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      COMPUTER_NUMBER.push(NUMBER);
    }
    this.computerNumbers = COMPUTER_NUMBER;
    this.showNumbers();
  }

  showNumbers() {
    this.computerNumbers.forEach(function (purchaseNumber) {
      console.log(purchaseNumber);
    });
    this.lottoNumber.lottoNumbers(this.computerNumbers);
  }
}

module.exports = RandomNumber;
