const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const Money = require("./Money");
const UI = require("./UI");

class Calculation {
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

module.exports = Calculation;
