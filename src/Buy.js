const MissionUtils = require("@woowacourse/mission-utils");
const Money = require("./Money");
const UI = require("./UI");

class Buy {
  gameCount;
  gameNumbers;

  // 구매 금액에 따른 로또 발행 횟수 계산
  countCalculate() {
    const moneyInput = UI.lottoBuy();
    const money = new Money(Number(moneyInput));
    this.gameCount = money.divide(moneyInput);
    UI.printBuying(this.gameCount);
  }

  // 구매 후 로또 번호 랜덤으로 자동 발행
  randomNumbers() {
    let numbers = new Array(this.gameCount);
    for (let i = 0; i < this.gameCount; i++) {
      numbers[i] = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
    }
    this.gameNumbers = numbers;
    UI.printGameNumber(this.gameNumbers);
  }
}

module.exports = Buy;
