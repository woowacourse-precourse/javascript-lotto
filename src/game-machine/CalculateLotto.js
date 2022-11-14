const MissionUtils = require("@woowacourse/mission-utils");
class CalculateLotto{
  constructor(){
    this.purchase_amount;
  }

  getPurchaseAmount(purchase_amount){
    this.purchase_amount = purchase_amount;
  }

}

const cal_lotto = new CalculateLotto();
module.exports = CalculateLotto;
