const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
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
    let newLotto = new Array();
    for(let i=0;i<count;i++){
      newLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      new Lotto(newLotto);
      myLotto.push(newLotto);
    }
    this.showIssuedLotto(myLotto);
  }
  showIssuedLotto(myLotto){
    MissionUtils.Console.print("\n")
    MissionUtils.Console.print(myLotto.length + "개를 구매했습니다.")
    for(let i=0;i<myLotto.length;i++){
      MissionUtils.Console.print(myLotto[i].sort(function compare(a, b) { //오름차순으로 정렬
        return a - b;
      }));
    }
  }
}
const app = new App();
      app.play();
module.exports = App;
