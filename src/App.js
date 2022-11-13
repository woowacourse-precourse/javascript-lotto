const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
let numOfLotto = 0;
let winNum = [];

class App {
  lottoMoney() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      numOfLotto = money/1000;
      Console.print(`${numOfLotto}개를 구매했습니다.`);
    });
    return numOfLotto;
  }

  createNum() {
    let lottoNumObj = {};
    for (let i = 1; i <= numOfLotto; i++) {
      lottoNumObj[`lotto${i}`] = Random.pickUniqueNumbersInRange(1, 45, 6).sort(function(a, b)  {
        return a - b;
      });
      Console.print(lottoNumObj[`lotto${i}`]);
    }
    return lottoNumObj;
  }

  getWinNum() {
    Console.readLine('당첨 번호를 입력해 주세요.', (number) => {
      winNum = number.toString().split(',').map(Number);
    });
    return winNum;
  }

  getBonusNum() {
    let bonusNum = 0;
    Console.readLine('보너스 번호를 입력해 주세요.', (bonus) => {
      bonusNum = bonus;
    })
    return bonusNum;
  }

  play() {
    let numOfLotto = this.lottoMoney();
    let lottoNumObj = this.createNum();
    let winNum = this.getWinNum();
    let bonusNum = this.getBonusNum();
    Console.close();
  }
}

module.exports = App;
