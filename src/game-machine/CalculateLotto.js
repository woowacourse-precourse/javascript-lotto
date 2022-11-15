const MissionUtils = require("@woowacourse/mission-utils");
const DrawLotto = require("../draw-machine/DrawLotto");
const Lotto = require("./Lotto");
const ResultStats = require("./ResultStats");
class CalculateLotto{
  constructor(){
    this.lotto_quantity;  
    this.purchase_amount;
  }

  getPurchaseAmount(purchase_amount){
    this.purchase_amount = purchase_amount;
    this.calculateLottoQuantity(purchase_amount);
    this.printLottoQuantity();
  }

  calculateLottoQuantity(purchase_amount){
    let lotto_quantity;
    lotto_quantity=purchase_amount/1000;
    this.lotto_quantity=lotto_quantity;
    return lotto_quantity;
  }

  calculateLottoNumbers(){
    let random_lotto_numbers;
    random_lotto_numbers=MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6); 
    return random_lotto_numbers;
  }
  
  printLottoQuantity(){
    MissionUtils.Console.print(`${this.lotto_quantity}개를 구매했습니다.`);
    this.sendLottoNumbers();
  }

  sendLottoNumbers(){
    let lotto_numbers;
    for(let i =0;i<this.lotto_quantity;i++){
      lotto_numbers = this.calculateLottoNumbers();
      const lotto = new Lotto(lotto_numbers);
      const result_stats = new ResultStats();
      result_stats.changeLottoNumbersToArray(lotto_numbers);
    }
    this.callInputDrawNumbers();
  }
  
  callInputDrawNumbers(){
    const draw_lotto = new DrawLotto();
    draw_lotto.inputDrawNumbers();
  }


}

const cal_lotto = new CalculateLotto();
module.exports = CalculateLotto;
