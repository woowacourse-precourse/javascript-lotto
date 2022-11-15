const MissionUtils = require("@woowacourse/mission-utils");
const LottoMachine = require('./LottoMachine')

class App {
  constructor(){
    this.lottomachine = new LottoMachine();
    this.purchaseAmount;
    this.lottoQuantity;
    this.lottoList;
    this.winningList;
    this.bonusNumber;
    this.result = [0,0,0,0,0]
  }
  play() {
    this.getMoney();
  }

  getMoney(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n",(money) => {
      this.purchaseAmount = parseInt(money)
      this.lottoQuantity = this.lottomachine.lottoQuantity(this.purchaseAmount);
      this.printQuantity();
    });
  }

  printQuantity(){
    MissionUtils.Console.print(`\n${this.lottoQuantity}개를 구매했습니다.`)
    this.printLottoList();
  }

  printLottoList(){
    this.lottoList = this.lottomachine.makeLottoNumbers();
    this.lottoList.forEach(ele =>MissionUtils.Console.print(ele));

    this.getWinningNumbers();
  }

  getWinningNumbers(){
    MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n",(number) => {
      const winningNumber = number.split(',').map((v)=>parseInt(v)).sort((a,b)=>a-b);
      //유효성 검사하기
      this.winningList = winningNumber;
      this.getBonusNumber();
    });
  }

  getBonusNumber(){
    MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n",(number) => {
      const bonusNum = parseInt(number);
      //유효성 검사하기
      this.bonusNumber =bonusNum;
      this.getMatchCount();
    });
  }

  printResult(){
    MissionUtils.Console.print(`
    `)
  }

  getMatchCount(){
    this.lottoList.forEach(lottoNums=>{
      let isMatch = lottoNums.filter(nums => this.winningList.includes(nums));

      if(isMatch.length === 6) this.result[0] +=1;
      if(isMatch.length === 5) this.getMatchBounsNum(lottoNums);
      if(isMatch.length === 4) this.result[3] +=1;
      if(isMatch.length === 3) this.result[4] +=1;
    })
  }
  getMatchBounsNum(lottoNums){
    if(this.lottoNums.includes(this.bonusNumber)) this.result[1] +=1;
    else this.result[2] +=1
  }

  getRateOfReturn(){
    prizeMoney = [2000000000,30000000,1500000,50000,5000];
    const returnList = prizeMoney.map((prize,index)=>prize*this.result[index]);
    const rateOfReturn = (returnList.reduce((acc,cur)=>acc+cur)/this.purchaseAmount).toFixed(2);
    return rateOfReturn;
  }

  



}




const app = new App();
app.play();

module.exports = App;
