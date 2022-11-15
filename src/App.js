const Lotto = require("../src/Lotto");
const CompareLotto = require("../src/CompareLotto");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play(){
    this.inputPayment();
  }
  //feature 1
  inputPayment(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      this.payment = answer;
      if(!this.checkPayment(answer)) throw new Error("[ERROR] 구입 금액은 1000원 단위여야 하고 0원 이상이어야 합니다.");
      MissionUtils.Console.print(`${this.payment/1000}개를 구매했습니다.`);
      this.createTicketNumber(this.payment/1000);
      });   

  }

  checkPayment(payment){
    if(payment%1000 !== 0) return false;
    else if (payment === 0) return false;
    else return true;
  }

  createTicketNumber(ticketNum){
    let tempList = [];
    for(let i = 0; i < ticketNum; i++){
      let temp = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      temp.sort(function(a, b) {
        return a - b;
      });
      tempList.push(temp);
    }
    this.ticketList = tempList;
    this.printTicket(this.ticketList);
  }

  printTicket(tList){
    
    for(let i = 0; i < tList.length; i++){
      let temp = "[";
      for(let j = 0; j < this.ticketList[i].length-1; j++) temp += `${this.ticketList[i][j]}, `
      temp += `${this.ticketList[i][5]}]`;
      MissionUtils.Console.print(temp);
    }

    this.inputWinningNum();
  }

  inputWinningNum(){
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (answer) => {
      this.winningNum = answer.split(',').map(Number);
      this.inputBonusNum();
    
    });
  }

  inputBonusNum(){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (answer) => {
      this.bonusNum = parseInt(answer);
      if(this.winningNum.includes(this.bonusNum))throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복 되지 않는 숫자여야 합니다.");
      //console.log(this.bonusNum);
      this.comparePlay();

    });
  }

  //feature 2 
  comparePlay(){
    this.checkLotteryNumber();
    const compareLotto = new CompareLotto(this.ticketList, this.winningNum, this.bonusNum);
    this.printRank(compareLotto.rankList);
  }

  checkLotteryNumber(){
    const lotto = new Lotto(this.winningNum);
  }

  //feature 4
   printRank(rankList){
    let lotteryMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    let total = 0;
    MissionUtils.Console.print("당첨 통계\n---");
    let resultString = `3개 일치 (5,000원) - ${rankList[0]}개\n4개 일치 (50,000원) - ${rankList[1]}개\n5개 일치 (1,500,000원) - ${rankList[2]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankList[3]}개\n6개 일치 (2,000,000,000원) - ${rankList[4]}개`;

    for(let i = 0; i < rankList.length; i++){
      if(rankList[i] !== 0) total += lotteryMoney[i];
    }
 
    MissionUtils.Console.print(resultString);
    MissionUtils.Console.print(`총 수익률은 ${(total/this.payment) * 100}%입니다.`);
    MissionUtils.Console.close();
  }


  

}

const app = new App();
app.play();

module.exports = App;
