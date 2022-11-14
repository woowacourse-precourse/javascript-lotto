const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const PRICE = 1000
class App {
  play() {
    let myLotto = {};
    MissionUtils.Console.readLine('구입금액을 입력해 주세요 : ', (money) => {
      this.verificateMoney(money)
      for(let i=0;i<money/PRICE;i++){
        let newLotto = this.issueLotto();
        myLotto[`lotto${i}`] = new Lotto(newLotto);
      }
      this.showIssuedLotto(myLotto);
      MissionUtils.Console.readLine('당첨 번호를 입력해 주세요 : ', (winningNumbers) => {
        MissionUtils.Console.readLine('보너스번호를 입력해 주세요 : ', (number) => {
          
        });
      });
    });
  }
  inputWinningNumbers(lotto){
   
  }
  verificateMoney(money){
    if(money % PRICE != 0) throw new Error('[ERROR] 구입금액은 1000원 단위여야 합니다')
  }
  issueLotto(){
    let lotto = new Array();
    lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return lotto;
  }
  showIssuedLotto(myLotto){
    const NUMBER_OF_LOTTO = Object.keys(myLotto).length;
    MissionUtils.Console.print("\n")
    MissionUtils.Console.print(NUMBER_OF_LOTTO + "개를 구매했습니다.")
    for(let i=0;i<NUMBER_OF_LOTTO;i++){
      MissionUtils.Console.print(myLotto[`lotto${i}`].getLotto().sort(function compare(a, b) { //오름차순으로 정렬
        return a - b;
      }));
    }
  }

}
const app = new App();
      app.play();
module.exports = App;
