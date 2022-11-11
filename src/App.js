const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    inputMoney();
  }
}

function inputMoney() {
  MissionUtils.Console.readLine(`구입금액을 입력해 주세요.\n`, (money) => {
    thousandValidate(money);
    MissionUtils.Console.print(money);
  });
}

function thousandValidate(money) {
  if (money % 1000 !== 0) {
    throw new Error("[ERROR] 1000원 단위의 금액을 입력해주세요.");
  }
}

const app = new App();
app.play();

module.exports = App;
