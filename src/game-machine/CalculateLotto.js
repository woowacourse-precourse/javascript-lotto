const MissionUtils = require("@woowacourse/mission-utils");
class CalculateLotto{
  constructor(){
    this.purchase_amount;
    this.lotto_quantity;  
  }

  getPurchaseAmount(purchase_amount){
    this.purchase_amount = purchase_amount;
  }

  calculateLottoQuantity(){
    let lotto_quantity;
    lotto_quantity=this.purchase_amount/1000;
    this.lotto_quantity=lotto_quantity;
    return lotto_quantity;
  }

}

const cal_lotto = new CalculateLotto();
module.exports = CalculateLotto;
