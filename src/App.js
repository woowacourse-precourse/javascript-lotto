const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
let numOfLotto = 0;

class App {
  lottoMoney() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      numOfLotto = money/1000;
      Console.print(`${numOfLotto}개를 구매했습니다.`);
    });
    return numOfLotto;
  }

  createNumber() {
    let lottoNumObj = {};
    for (let i = 1; i <= numOfLotto; i++) {
      lottoNumObj[`lotto${i}`] = Random.pickUniqueNumbersInRange(1, 45, 6).sort(function(a, b)  {
        return a - b;
      });
      Console.print(lottoNumObj[`lotto${i}`]);
    }
    return lottoNumObj;
  }

  winNumber() {
    let winNumber = [];
    Console.readLine('당첨 번호를 입력해 주세요.', (number) => {
      winNumber = number.toString().split(',').map(Number);
    });
    return winNumber;
  }

  play() {
    let numOfLotto = this.lottoMoney();
    let lottoNumObj = this.createNumber();
    let winNumber = this.winNumber();
    Console.close();
  }
}

module.exports = App;
