const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor(){
    this.purchase = 0;
    this.lottoNumber = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
  }

  play() {
    this.inputPurchaseMoney();
  }
  inputPurchaseMoney(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      const purchase = this.validatePurchase(money);
      this.purchase = purchase; 
    });
    this.winningLottoNumber();
  }
  validatePurchase(money){}
  winningLottoNumber(){
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (winning) => {
      this.winningNumber = this.validateWinning(winning);
    });
    this.bonusLottoNumber();
  }
  validateWinning(win){}
  bonusLottoNumber(){
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (bonus) => {
      this.bonusNumber = this.validateBonus(bonus);
    });
    this.randomPurchaseLotto();
  }
  validateBonus(num){}


}

module.exports = App;
