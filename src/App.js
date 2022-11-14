const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
let numOfLotto = 0;
let lottoNumObj = {};
let winNum = [];
let bonusNum = 0;
let correct3 = 0;
let correct4 = 0;
let correct5 = 0;
let correct5B = 0;
let correct6 = 0;

class App {
  lottoMoney() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      numOfLotto = money/1000;
      Console.print(`${numOfLotto}개를 구매했습니다.`);
    });
    return numOfLotto;
  }

  createNum() {
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
    Console.readLine('보너스 번호를 입력해 주세요.', (bonus) => {
      bonusNum = bonus;
    })
    return bonusNum;
  }

  showResult() {
    for (let i = 0; i < numOfLotto; i++) {
      for (let j = 0; j < 6; j++) {
        for (let k = 0; k < 7; k++) {
          if (lottoNumObj[`lotto${i}`][j] == winNum[k]) {
            let count = 0;
            count++;
          }
          if (count == 3) {
            correct3++;
          }
          if (count == 4) {
            correct4++;
          }
          if (count == 5 && lottoNumObj[`lotto${i}`][j] != winNum[6]) {
            correct5++;
          }
          if (count == 5 && lottoNumObj[`lotto${i}`][j] == winNum[6]) {
            correct5B++;
          }
          if (count == 6) {
            correct6++;
          }
        }
      }
    }
    Console.print(`3개 일치 (5,000원) - ${correct3}개
    4개 일치 (50,000원) - ${correct4}개
    5개 일치 (1,500,000원) - ${correct5}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${correct5B}개
    6개 일치 (2,000,000,000원) - ${correct6}개`);
  }

  returnRate() {
    let rate = (correct3 * 5000 + correct4 * 50000 + correct5 * 1500000 + correct5B * 30000000 + correct6 * 2000000000) / (numOfLotto * 1000);
    Console.print(`총 수익률은 ${rate.toFixed(1)}%입니다.`);
  }

  play() {
    numOfLotto = this.lottoMoney();
    lottoNumObj = this.createNum();
    winNum = this.getWinNum();
    bonusNum = this.getBonusNum();
    winNum.push(bonusNum);
    this.showResult();
    this.returnRate();
    winNum.pop();
    const lotto = new Lotto();
    lotto.validate(winNum);
    winNum.push(bonusNum);
    lotto.validateBonus(winNum);
    Console.close();
  }
}

module.exports = App;
