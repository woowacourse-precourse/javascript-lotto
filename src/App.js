const MissionUtils = require("@woowacourse/mission-utils");
const PRICE = 1000
class App {
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요 : ', (money) => {
      this.verificateMoney(money)
      this.issueLotto(money/PRICE)
      MissionUtils.Console.close()
    });
  }
  verificateMoney(money){
    if(money % PRICE != 0) throw new Error('[ERROR] 구입금액은 1000원 단위여야 합니다')
  }
  issueLotto(count){
    let myLotto = new Array();
    for(let i=0;i<count;i++){
      myLotto.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    this.showIssuedLotto(myLotto);
  }
  showIssuedLotto(myLotto){
    for(let i=0;i<myLotto.length;i++){
      MissionUtils.Console.print(myLotto[i].sort(function compare(a, b) {
        return a - b;
      }));
    }
  }
}
const app = new App();
      app.play();
module.exports = App;
