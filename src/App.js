const MU = require("@woowacourse/mission-utils");
class App {
  play() {}
  buyLotto(){
    MU.Console.readLine('구입금액을 입력해 주세요.',(money) => {
      if(isNaN(money)){
        throw new Error("[ERROR] 구입금액은 숫자여야 합니다.");
      }
      let purchaseNum = parseInt(money/1000);
      this.makeLottoNum(purchaseNum);

      MU.Console.close();
    });
  }
  makeLottoNum(purchaseNum){
    let Lottos = [purchaseNum][6];
  }
}

module.exports = App;
