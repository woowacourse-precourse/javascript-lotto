const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const InpuVal = require('./InputVal');

class App {
  inputMoney(){
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      Console.print(money);
      let InpuValidation = new InpuVal(money);
    });
  }

  play() {
    this.inputMoney();
  }

}

const app = new App();
app.play();

module.exports = App;
