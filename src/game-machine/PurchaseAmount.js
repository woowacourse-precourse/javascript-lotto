const MissionUtils = require("@woowacourse/mission-utils");
class PurchaseAmount {

  constructor(){
    this.purchase_amount;
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input_money) => {
      console.log(input_money);
      this.savePurchaseAmount(input_money);
    });
  }
  
  savePurchaseAmount(input_money){
    this.purchase_amount=input_money;
  }
}

const amount = new PurchaseAmount();

module.exports = PurchaseAmount;
