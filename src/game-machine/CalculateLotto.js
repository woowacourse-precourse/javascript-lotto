const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class CalculateLotto{
  constructor(){
    this.lotto_quantity;  
    this.purchase_amount;
  }

  getPurchaseAmount(purchase_amount){
    this.purchase_amount = purchase_amount;
    this.calculateLottoQuantity();
    this.sendLottoNumbers();
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
  sendLottoInfo(){
    let lotto_numbers = this.calculateLottoNumbers();
    const lotto = new Lotto(lotto_numbers);
    lotto.getLottoQuantity(this.lotto_quantity);
  }

}

const cal_lotto = new CalculateLotto();
module.exports = CalculateLotto;
