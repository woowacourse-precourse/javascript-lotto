const MissionUtils = require("@woowacourse/mission-utils");
const Money = require("./Money");
const UI = require("./UI");

class Buy {
  gameCount;
  gameNumbers;

  countCalculate() {
    const moneyInput = UI.lottoBuy();
    const money = new Money(Number(moneyInput));
    this.gameCount = money.divide(moneyInput);
  }

  randomNumbers() {
    let numbers = new Array(this.gameCount);
    for (let i = 0; i < count; i++) {
      numbers[i] = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
    }
    this.gameNumbers = numbers;
  }
}

module.exports = Buy;
