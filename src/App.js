const MissionUtils = require("@woowacourse/mission-utils");
const UserLotto = require("./UserLotto");
const { isValidateUserInput } = require("./utils/validator");
class App {
  constructor() {
    this.userLotto = new UserLotto();
  }
  play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    MissionUtils.Console.readLine("", (amount) => {
      if (isValidateUserInput(amount)) {
        this.userLotto.createUserLotto(amount);
        this.userLotto.printUserLottoInformation();
      }
    });
  }
}

const app = new App();
app.play();
module.exports = App;
