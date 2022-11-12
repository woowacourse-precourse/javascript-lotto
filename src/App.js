const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  constructor() {
    this.myMoney = 0;
  }

  play() {
    this.start();
  }

  start() {
    let piece = 0;
    MissionUtils.Console.readLine("구입금액을 입력해 주세요. ", (answer) => {
      if (+answer % 1000 > 0) {
        throw new Error("[ERROR] 천원 단위로만 구매 가능합니다.");
      }

      this.myMoney += +answer;
      piece = +answer / 1000;
      if (isNaN(piece)) {
        throw new Error("[ERROR] 숫자만 입력 가능합니다.");
      }
      MissionUtils.Console.print(`${piece}개를 구매했습니다.`);
      this.createLottoBundle(piece);
    });
  }

  createLottoBundle(piece) {
    const bundle = [];
    for (let i = 0; i < piece; i++) {
      bundle.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    for (let i = 0; i < bundle.length; i++) {
      let str = "";
      JSON.stringify(bundle[i].sort((a, b) => a - b))
        .split("")
        .forEach((y) => {
          if (y === ",") {
            str += ", ";
          }
          if (y !== ",") {
            str += y;
          }
        });
      MissionUtils.Console.print(str);
    }
    this.inputLottoNumber(bundle);
  }

  inputLottoNumber(bundle) {
    let numbers = [];
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (answer) => {
      let answerArray = answer.split(",");
      if (new Lotto(answerArray)) {
        answerArray.forEach((x) => numbers.push(+x));
      }
      this.inputBonusNumber(bundle, numbers);
    });
  }

  inputBonusNumber(bundle, numbers) {
    let bonus = 0;
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (answer) => {
      if (numbers.includes(+answer)) {
        throw new Error(
          "[ERROR] 보너스 번호는 입력한 당첨 번호와 중복될 수 없습니다."
        );
      }
      if (+answer > 45 || +answer < 1) {
        throw new Error(
          "[ERROR] 보너스 번호는 1부터 45까지의 수만 입력할 수 있습니다."
        );
      }
      if (isNaN(+answer)) {
        throw new Error("[ERROR] 보너스 번호는 숫자만 입력 가능합니다.");
      }
      bonus += +answer;
      this.statistics(bundle, numbers, bonus);
    });
  }

  statistics(bundle, numbers, bonus) {
    const collectCount = [0, 0, 0, 0, 0];
    for (let i = 0; i < bundle.length; i++) {
      let count = 0;
      let bonusCount = 0;
      if (bundle[i].includes(bonus)) {
        bonusCount += 1;
      }
      for (let j = 0; j < bundle[i].length; j++) {
        if (bundle[i].includes(numbers[j])) {
          count += 1;
        }
      }
      if (count === 3) {
        collectCount[0]++;
      }
      if (count === 4) {
        collectCount[1]++;
      }
      if (count === 5 && bonusCount !== 1) {
        collectCount[2]++;
      }
      if (count === 5 && bonusCount === 1) {
        collectCount[3]++;
      }
      if (count === 6) {
        collectCount[4]++;
      }
    }
    this.result(collectCount);
  }

  result(collectCount) {
    const myMoney = this.myMoney;
    const LottoMoney =
      collectCount[0] * 5000 +
      collectCount[1] * 50_000 +
      collectCount[2] * 1_500_000 +
      collectCount[3] * 30_000_000 +
      collectCount[4] * 2_000_000_000;
    const yield = ((LottoMoney / myMoney) * 100).toFixed(1);
    MissionUtils.Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${collectCount[0]}개
4개 일치 (50,000원) - ${collectCount[1]}개
5개 일치 (1,500,000원) - ${collectCount[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${collectCount[3]}개
6개 일치 (2,000,000,000원) - ${collectCount[4]}개
총 수익률은 ${yield}%입니다.
`);
    this.close();
  }
  close() {
    MissionUtils.Console.close();
  }
}
const app = new App();
app.play();
module.exports = App;
