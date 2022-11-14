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
    
  }
}

module.exports = App;
