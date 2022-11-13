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
      if(this.costValidate(money)) this.numberOfPurchases(money);
    });
  }
  costValidate(money){
    if(money<1000){
      throw new Error("[ERROR] 최소 구입금액은 1000원 이상입니다");
    }
    if(parseInt(money%1000)!=0){
      throw new Error("[ERROR] 구입금액은 1000원 단위입니다");
    }
    return true;
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
    this.printLottoNumber(numbersList,number);  
  }
  printLottoNumber(numbersList,number){
    for(let i=0;i<numbersList.length;i++){
      let print=numbersList[i].split(',');
      print.sort((a,b)=>a-b);
      MissionUtils.Console.print(`[${print}]`);
    }
    this.compare(numbersList,number);
  }
  compare(numbersList,number){
    const winingNumbers=Lotto.createWiningNumber();
    const bonusNumber=Bonus.bonusNumber();
    let fivePlace=0;
    let fourPlace=0;
    let thirdPlace=0;
    let secondPlace=0;
    let firstPlace=0;
    for(let i=0;i<numbersList.length;i++){
      let checkNumberList=numbersList[i].split(',');
      let duplicate=winingNumbers.filter(x=>checkNumberList.includes(x)).length;
      if(duplicate===3) fivePlace++;
      if(duplicate===4) fourPlace++;
      if(duplicate===5) {
        if(!winingNumbers.includes(bonusNumber)) {
          thirdPlace++;
        }
        secondPlace++;
      }
      if(duplicate===6) firstPlace++;
    }
    this.resultPrint(fivePlace,fourPlace,thirdPlace,secondPlace,firstPlace,number);
  }
  resultPrint(fivePlace,fourPlace,thirdPlace,secondPlace,firstPlace,number){
    MissionUtils.Console.print(`당첨 통계`)
    MissionUtils.Console.print(`---`)
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${fivePlace}개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${fourPlace}개`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${thirdPlace}개`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${secondPlace}개`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${firstPlace}개`)
    const reteOfReturn=((5000*fivePlace)+(50000*fourPlace)+(1500000*thirdPlace)+(30000000*secondPlace)
    +(2000000000*firstPlace))/(number*1000);
    MissionUtils.Console.print(`총 수익률은 ${reteOfReturn.toFixed(1)}입니다.`);
  }
}
const app = new App();
app.play();

module.exports = App;
