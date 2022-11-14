const MissionUtils = require("@woowacourse/mission-utils");
const { validateMoney } = require("./Money");

class App {
  #money;
  #numOfLotto;
  #userLotto;
  #winLotto;
  #bonusNumber;

  play() {
    this.getMoney();
  }

  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      validateMoney(money);
      this.#money = money;
      this.getNumOfLotto();
    });
  }
  
  getNumOfLotto() {
    this.#numOfLotto = this.#money / 1000;
    buyLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
