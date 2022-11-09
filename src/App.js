const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.lotteryArray = [];
  }
  play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine("", (answer) => {
      this.lotteryCount(answer);
    });
  }

  lotteryCount(answer) {
    for (let i = 0; i < answer / 1000; i++) this.lotteryIssue();
    this.lotteryPrint(answer);
  }

  lotteryIssue() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    this.lotterySave(numbers);
  }

  lotterySave(numbers) {
    numbers.sort((a, b) => {
      return a - b;
    });
    this.lotteryArray.push(numbers);
  }

  lotteryPrint(answer) {
    MissionUtils.Console.print(`${answer / 1000}개를 구매했습니다.`);
    for (let i = 0; i < answer / 1000; i++)
      MissionUtils.Console.print(`[${this.lotteryArray[i].join(", ")}]`);
  }
}
console.log();
module.exports = App;
