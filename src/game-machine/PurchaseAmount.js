const MissionUtils = require("@woowacourse/mission-utils");
const  CalculateLotto= require("./CalculateLotto");

class PurchaseAmount {

  constructor(){
    this.purchase_amount;
  }

  inputPurchaseAmount(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input_money) => {
      console.log(input_money);
      this.savePurchaseAmount(input_money);
    });
  }
  
  savePurchaseAmount(input_money){
    this.purchase_amount=input_money;
    this.accessPurchaseAmount();
  }

  accessPurchaseAmount(){
    let purchase_amount = this.purchase_amount;
    const cal_lotto = new CalculateLotto();
    cal_lotto.getPurchaseAmount(purchase_amount);
  }
  
}

const amount = new PurchaseAmount();
module.exports = PurchaseAmount;
