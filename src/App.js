const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.cost();
  }
  cost(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (money)=>{
      this.costValidate(money);
    });
  }
  costValidate(money){
    if(money<1000){
      throw new Error("[ERROR] 최소 구입금액은 1000원 이상입니다");
    }
    if(parseInt(money%1000)!=0){
      throw new Error("[ERROR] 구입금액은 1000원 단위입니다");
    }
    this.numberofpurchases(money);
  }
  numberOfPurchases(money){
    const number=parseInt(money/1000);
    this.purchaseLottoNumbers(number);
  }
  purchaseLottoNumbers(number){
    const numbersList=[];
    for(let i=0;i<number;i++){
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbersList.push(numbers);
    }
  }
}

module.exports = App;
