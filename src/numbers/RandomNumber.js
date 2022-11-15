const MissionUtils = require("@woowacourse/mission-utils");
const LottoNumber = require("./LottoNumber");
const COMPUTER_NUMBER = [];

class RandomNumber {
  constructor(purchaseNumber, computernumbers) {
    this.purchaseNumber = purchaseNumber;
    this.computerNumbers = computernumbers;
    this.lottoNumber = new LottoNumber();
  }

  showPurchaseNumber(purchaseNumber) {
    MissionUtils.Console.print(`${purchaseNumber}개를 구매했습니다.`);
    this.purchaseNumber = purchaseNumber;
    this.randomComputerNumber();
  }

  randomComputerNumber() {
    while (COMPUTER_NUMBER.length < this.purchaseNumber) {
      const NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      COMPUTER_NUMBER.push(NUMBER.sort((a, b) => a - b));
    }
    this.computerNumbers = COMPUTER_NUMBER;
    this.showNumbers();
  }

  showNumbers() {
    this.computerNumbers.forEach(function (num) {
      MissionUtils.Console.print("[" + num.join(", ") + "]");
    });
    this.lottoNumber.lottoNumbers(this.computerNumbers);
  }
}

module.exports = RandomNumber;
