const MissionUtils = require("@woowacourse/mission-utils");
const Lotto=require("./Lotto");
const Bonus=require("./Bonus");
class App {
  constructor(){
    //this.winingNumbers=Lotto.createWiningNumber();
    //this.bonusNumber=Bonus.bonusNumber();
  }
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
    MissionUtils.Console.print(`${number}개를 구매했습니다.`)
    const numbersList=[];
    for(let i=0;i<number;i++){
      let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);      
      numbers=numbers.toString();
      numbersList.push(numbers);
    }
    this.printLottoNumber(numbersList);  
  }
  printLottoNumber(numbersList){
    for(let i=0;i<numbersList.length;i++){
      let print=sort(numbersList[i]);
      MissionUtils.Console.print(`${print}`);
    }
    this.compare(numbersList);
  }
  compare(numbersList){
    const winingNumbers=Lotto.createWiningNumber();
    for(let i=0;i<numbersList.length;i++){
      let checkNumberList=numbersList[i].split(',');
      let duplicate=winingNumbers.filter(x=>checkNumberList.includes(x)).length;
    }
  }
}

module.exports = App;
