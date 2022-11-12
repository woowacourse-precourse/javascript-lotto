const Lotto = require("./Lotto");
const MU = require("@woowacourse/mission-utils");
class App {
  play() {
   this.buyLotto();
  }
  buyLotto(){
    MU.Console.readLine('구입금액을 입력해 주세요.\n',(money) => {
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
      this.getWinNum();
      
    });
  }
  getWinNum(){
    MU.Console.readLine('\n당첨 번호를 입력해 주세요.', (number) =>{
      console.log(number.split(','));
      let win = new Lotto(number.split(','));
      return MU.Console.close();;
    });
  }
  getBonusNum(){
    MU.Console.readLine('보너스 번호를 입력해 주세요.', (number) =>{
      if(isNoN(number)){
        throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
      }
      if(parseInt(number) < 1 || 45 < parseInt(number)){
        throw new Error("[ERROR] 로또 범위 안의 숫자를 입력해주세요.");
      }
    });
  }
  makeLottoNum(purchaseNum){
    let Lottos = [purchaseNum];
    for(let i = 0; i < purchaseNum; i++){
      Lottos[i] = MU.Random.pickUniqueNumbersInRange(1,45,6);
    }
    this.printBuyLotto(Lottos);
  }
  printBuyLotto(Lottos){
    MU.Console.print(`\n${Lottos.length}개를 구매했습니다.`);
    for(let i = 0; i < Lottos.length; i++){
      Lottos[i].sort((a,b) => {
        return a-b;
      });
      MU.Console.print(Lottos[i]);
    }
  }
  
}
const app = new App();
app.play();
module.exports = App;
