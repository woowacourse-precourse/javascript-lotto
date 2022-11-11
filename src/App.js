const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.lottoArray = [];
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine(`구입금액을 입력해 주세요.\n`, (money) => {
      this.thousandValidate(money);
      this.countLotto(money);
    });
  }

  thousandValidate(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위의 금액을 입력해주세요.");
    }
  }

  createLotto(money) {}

  countLotto(money) {
    const lottoQuantity = money / 1000;
    MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
