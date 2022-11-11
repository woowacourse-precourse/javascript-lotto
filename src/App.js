const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")
const Error = require("./ErrorMessage.js")
const Lotto = require("./Lotto.js")
class App {
  constructor(){
    this.Lotto = new Lotto()
  }
  play() {
    MissionUtils.Console.readLine(Notice.INPUT_MONEY,(money) => {
      this.inputMoneyValidate(money)
    });
  }
  inputMoneyValidate(money){
    if (money % 1000 != 0) {
      throw Error.UNIT_ERROR;
    }
  }
}

const app = new App();
app.play();
module.exports = App;
