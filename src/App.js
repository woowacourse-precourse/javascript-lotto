const MU = require("@woowacourse/mission-utils");
class App {
  play() {
    this.buyLotto();
  }
  buyLotto(){
    MU.Console.readLine('구입금액을 입력해 주세요.',(money) => {
      if(isNaN(money)){
        throw new Error("[ERROR] 구입금액은 숫자여야 합니다.");
      }
      if(parseInt(money/1000) === 0){
        throw new Error("[ERROR] 최소 구입금액은 1000원입니다.");
      }
      if(parseInt(money%1000) != 0){
        throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
      }
      let purchaseNum = parseInt(money/1000);
      this.makeLottoNum(purchaseNum);

      //MU.Console.close();
    });
  }
  makeLottoNum(purchaseNum){
    let Lottos = [purchaseNum];
    MU.Console.print(purchaseNum);
    for(let i = 0; i < purchaseNum; i++){
      Lottos[i] = MU.Random.pickUniqueNumbersInRange(1,45,6);
      MU.Console.print(Lottos[i]);
    }
   // this.printBuyLotto(Lottos);
    return MU.Console.close();
  }
  printBuyLotto(Lottos){
    for(let i = 0; i < Lottos.length; i++){
      MU.Console.print(Lottos[i]);
    }
  }
  
}
const app = new App();
app.play();
module.exports = App;
