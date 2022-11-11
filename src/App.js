const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")
const Lotto = require("./Lotto.js")
class App {
  constructor(){
    this.Lotto = new Lotto()
  }
  play() {
    MissionUtils.Console.readLine(Notice.INPUT_MONEY,(money) => {
      console.log(money)
    });
  }
}

const app = new App();
app.play();
module.exports = App;
