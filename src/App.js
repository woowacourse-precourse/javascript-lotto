const MissionUtils = require("@woowacourse/mission-utils");
const LottoMachine = require('./LottoMachine')

class App {
  constructor(){
    this.lottomachine = new LottoMachine();
    this.lottoQuantity;
  }
  play() {
    this.buyLotto();
  }

  buyLotto(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n",(money) => {
      const purchaseAmount = parseInt(money)
      this.lottoQuantity = this.lottomachine.lottoQuantity(purchaseAmount);
      this.printQuantity();
    });
  }

  printQuantity(){
    MissionUtils.Console.print(`${this.lottoQuantity}개를 구매했습니다.`)
  }



}




const app = new App();
app.play();

module.exports = App;
