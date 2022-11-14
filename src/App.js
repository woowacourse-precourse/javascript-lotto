const MissionUtils = require("@woowacourse/mission-utils");
const PRICE = 1000
class App {
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요 : ', (input) => {
      this.verificateMoney(input)
    });
  }
  verificateMoney(money){
    if(money % PRICE != 0) throw new Error('[ERROR] 구입금액은 1000원 단위여야 합니다')
  }
}
const app = new App();
      app.play();
module.exports = App;
