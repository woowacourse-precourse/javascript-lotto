const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #money;
  #tickets;
  #userLotto;
  #winLotto;
  #bonusNumber;

  play() {
    this.getMoney();
  }

  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (userInput) => {
      validateMoney(userInput);
      this.#money = userInput;
      this.getNumOfTickets();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
