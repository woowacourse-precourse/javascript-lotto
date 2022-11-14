const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
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

  calculateLottoNumbers(){
    let random_lotto_numbers;
    random_lotto_numbers=MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6); 
    return random_lotto_numbers;
  }

}

const cal_lotto = new CalculateLotto();
module.exports = CalculateLotto;
