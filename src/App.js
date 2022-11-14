const {Console} = require("@woowacourse/mission-utils");
const {Random} = require("@woowacourse/mission-utils");
const payValidate = require("./payValidate.js");
const {RESULT_MESSAGE} = require("./constant.js");

const Lotto = require("./Lotto.js");

class App {
  constructor() {
    this.payment;
    this.profit;
  };

  calculateProfitRate(rankCntList) {
    this.payment = this.payment;
    //console.log(this.payment)
    this.profit = rankCntList[0]*5000 + rankCntList[1]*50000 + rankCntList[2]*1500000 + rankCntList[3]*30000000 + rankCntList[4]*200000000;
    this.profitRate = ((this.profit / this.payment) * 100).toFixed(1);

    Console.print('총 수익률은 '+ this.profitRate  + '%입니다.');
    Console.close();
  }

  showResultPhrase(rankList) {
    const rankFiveCnt = rankList.filter(element => 5 === element).length;
    const rankFourCnt = rankList.filter(element => 4 === element).length;
    const rankThreeCnt = rankList.filter(element => 3 === element).length;
    const rankTwoCnt = rankList.filter(element => 2 === element).length;
    const rankOneCnt = rankList.filter(element => 1 === element).length;
    
    Console.print(RESULT_MESSAGE.RANK_FIVE + `${rankFiveCnt}개`);
    Console.print(RESULT_MESSAGE.RANK_FOUR + `${rankFourCnt}개`);
    Console.print(RESULT_MESSAGE.RANK_THREE + `${rankThreeCnt}개`);
    Console.print(RESULT_MESSAGE.RANK_TWO + `${rankTwoCnt}개`);
    Console.print(RESULT_MESSAGE.YOU_WIN + `${rankOneCnt}개`);
    
    return [rankFiveCnt, rankFourCnt, rankThreeCnt, rankTwoCnt, rankOneCnt];
  }

  calculateRank(answerCnt, bonusOrNot) {
    if(answerCnt == 6) return 1;
    if(answerCnt == 5 && bonusOrNot) return 2;
    if(answerCnt == 5) return 3;
    if(answerCnt == 4) return 4;
    if(answerCnt == 3) return 5;
    return 0;
  }

  calculateGameResult(allLines, winningNums, bonusNum) {
    Console.print('\n당첨 통계\n---');
    const rankList = [];
    this.bonusOrNot = false;

    for(var i=0;i<allLines.length;i++){
      const oneLine = allLines[i];
      const answerCnt = oneLine.filter(x => winningNums.includes(x)).length;
      if(answerCnt == 5) {
        if(oneLine.includes(bonusNum)) this.bonusOrNot = true;
      }
      const rank = this.calculateRank(answerCnt, this.bonusOrNot);
      rankList.push(rank);
    }
    //console.log(rankList);
    this.rankCntList = this.showResultPhrase(rankList);
    return this.calculateProfitRate(this.rankCntList);
  }
  //6. 보너스 번호 입력받기
  enterBonus(allLines, winningNums){
    Console.readLine('\n보너스 번호를 입력해 주세요.\n',(bonus) =>{
      const winningArr = Array.from(winningNums).map((i) => Number(i)); //문자열을 Number형 배열로 변환
      generalValidation(bonus);
      //console.log(winningArr);
      if(winningArr.includes(parseInt(bonus))){
        throw new Error('보너스 번호가 당첨 번호와 중복됩니다.')
      }
      //console.log('보너스 번호는... ',bonus);
      return this.calculateGameResult(allLines, winningArr, bonus);
    })  
  }

  //5. 당첨 번호 입력받기
  enterWinningNums(allLines){
    Console.readLine('\n당첨 번호를 입력해 주세요.\n',(answer) =>{
      const answerList = answer.split(',');
      //console.log(answerList);
      const lotto = new Lotto(answerList);
      //console.log(lotto)
      return this.enterBonus(allLines,answerList);

    })
  }

//4. 로또 수량만큼 랜덤으로 로또 번호 생성
  makeLottoNums(amount){
    let allLines = []; //
    for(var i=0; i<amount; i++){
      const oneLine = Random.pickUniqueNumbersInRange(1, 45, 6);
      allLines.push(oneLine);
      //Console.print(oneLine);
    }
  
    allLines.forEach((oneLine)=>{
      Console.print(`[${oneLine.join(", ")}]`)    
    });
    
    return this.enterWinningNums(allLines);
    //console.log(allLines);
  }


  showLottoAmount(money) {
    const amount = parseInt(money)/1000;
    Console.print(`\n${amount}개를 구매했습니다.`);
    
    return this.makeLottoNums(amount);
    //return this.amount;
  }

  //1. 로또 구입 금액 입력받기
  payLottoMoney() {  
    Console.readLine('구입금액을 입력해 주세요.\n', (total) => {
      payValidate(total); 
      this.payment = total;

      return this.showLottoAmount(total);
    });
  }

  play() {
    this.amount = this.payLottoMoney(); 

  }
}

const app = new App();
app.play();

module.exports = App;
