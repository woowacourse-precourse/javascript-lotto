const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
let numOfLotto = 0;
let lottoNumObj = {};

class App {
  lottoMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      numOfLotto = money/1000;
      Console.print(`\n${numOfLotto}개를 구매했습니다.`);
      this.createNumber();
    });
  }

  createNumber() {
    for (let i = 1; i <= numOfLotto; i++) {
      lottoNumObj[`lotto${i}`] = Random.pickUniqueNumbersInRange(1, 45, 6);
    }
    for (let i = 1; i <= numOfLotto; i++) {
      Console.print(lottoNumObj[`lotto${i}`]);
    }
  }

  play() {
    this.lottoMoney();
  }
}

module.exports = App;
