const MissionUtils = require("@woowacourse/mission-utils");
const Money = require("./Money");
const UI = require("./UI");

class Buy {
  countCalculate() {
    const moneyInput = UI.lottoBuy();
    const money = new Money(Number(moneyInput));
    const count = money.calculate(moneyInput);
    return count;
  }

  randomNumbers(count) {
    let numbers = new Array(count);
    for (let i = 0; i < count; i++) {
      numbers[i] = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
    }
    return numbers;
  }
}

module.exports = Buy;
