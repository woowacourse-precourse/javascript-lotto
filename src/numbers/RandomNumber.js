const MissionUtils = require("@woowacourse/mission-utils");
const LottoNumber = require("./LottoNumber");
const COMPUTER_NUMBER = [];

class RandomNumber {
  constructor(purchaseAmout, computernumbers) {
    this.purchaseAmout = purchaseAmout;
    this.computerNumbers = computernumbers;
    this.lottoNumber = new LottoNumber();
  }

  randomComputerNumber(purchaseAmout, purchaseNumber) {
    while (COMPUTER_NUMBER.length < purchaseNumber) {
      const NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      COMPUTER_NUMBER.push(NUMBER);
    }
    this.computerNumbers = COMPUTER_NUMBER;
    this.purchaseAmout = purchaseAmout;
    this.showNumbers();
  }

  showNumbers() {
    this.computerNumbers.forEach(function (purchaseNumber) {
      console.log(purchaseNumber);
    });
    this.lottoNumber.lottoNumbers(this.purchaseAmout, this.computerNumbers);
  }
}

module.exports = RandomNumber;
