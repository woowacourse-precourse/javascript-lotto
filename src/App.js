const MissionUtils = require("@woowacourse/mission-utils");
const Lotto=require("./Lotto");
const Bonus=require("./Bonus");
class App {
  lottoList=[];
  number;
  getWining;
  getBonus;
  play() {
    this.cost();
  }
  cost(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (money)=>{
      if(this.costValidate(money)) this.purchasesCount(money);
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
  purchasesCount(money){
    this.number=parseInt(money/1000);
    this.createLottoNumber();
  }
  createLottoNumber(){
    MissionUtils.Console.print(`${this.number}개를 구매했습니다.`)
    for(let i=0;i<this.number;i++){
      let lottonumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);      
      this.lottoList.push(lottonumbers);
    }
    this.printLottoList();  
  }
  printLottoList(){
    for(let i=0;i<this.lottoList.length;i++){
      let print=this.lottoList[i];
      print.sort((a,b)=>a-b);
      MissionUtils.Console.print(`[${print.join(", ")}]`);
    }
    this.getWiningNumbers();
  }
  getWiningNumbers(){
    MissionUtils.Console.readLine("당첨번호를 입력해 주세요.",(input)=>{
      this.getWining=input.split(',').map(Number);
      const lotto = new Lotto(this.getWining);
      this.getBonusNumber();
    });
  }
  getBonusNumber(){
    MissionUtils.Console.readLine("보너스번호를 입력해 주세요.",(bonusInput)=>{
      this.getBonus=bonusInput;
      const bonus=new Bonus();
      if(bonus.bonusNumberValidate(this.getWining,this.getBonus)) this.compare();
    });
  }
  compare(){
    let fiveRank=0;
    let fourRank=0;
    let thirdRank=0;
    let secondRank=0;
    let firstRank=0;
    for(let i=0;i<this.lottoList.length;i++){
      let checkNumberList=this.lottoList[i];
      let duplicate=this.getWining.filter(x=>checkNumberList.includes(x)).length;
      if(duplicate===3) fiveRank++;
      if(duplicate===4) fourRank++;
      if(duplicate===5) {
        if(!winingNumbers.includes(this.getBonus)) {
          thirdRank++;
        }
        secondRank++;
      }
      if(duplicate===6) firstRank++;
    }
    this.resultPrint(fiveRank,fourRank,thirdRank,secondRank,firstRank);
  }
  resultPrint(fiveRank,fourRank,thirdRank,secondRank,firstRank){
    MissionUtils.Console.print(`당첨 통계`)
    MissionUtils.Console.print(`---`)
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${fiveRank}개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${fourRank}개`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${thirdRank}개`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${secondRank}개`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${firstRank}개`)
    const reteOfReturn=((5000*fiveRank)+(50000*fourRank)+(1500000*thirdRank)+(30000000*secondRank)
    +(2000000000*firstRank))/(this.number*1000)*100;
    MissionUtils.Console.print(`총 수익률은 ${reteOfReturn.toFixed(1)}%입니다.`);
  }
}
const app = new App();
app.play();

module.exports = App;
