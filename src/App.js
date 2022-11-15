const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    lottoBuyNum();
  }
}

const lottoBuyNum = () => {
  MissionUtils.Console.readLine('구입금액을 입력해 주세요. \n', (answer) => {
    console.log(answer);
  })
}

const app = new App();
app.play();


module.exports = App;


