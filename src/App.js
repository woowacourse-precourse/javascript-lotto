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
    });
  }
}
const app = new App();
app.play();
module.exports = App;
