const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

const { GAME_START_MESSAGE, ANSWER_INPUT_MESSAGE, BONUS_INPUT_MESSAGE } = require("./message");
const { MONEY_UNIT, LOTTO_START, LOTTO_END, LOTTO_NUM, ANSWER_NUM_FIVE, FIFTH_PRIZE, FOURTH_PRIZE, THIRD_PRIZE, SECOND_PRIZE, FIRST_PRIZE } = require("./constants");
const { LOTTO_STATISTICS, PURCHASE_NUM_MESSAGE, showGameRank } = require("./ConsolePrint");

const Lotto = require("./Lotto");
const payValidate = require("./payValidate");
const bonusValidate = require("./bonusValidate");

class App {
  constructor() {
    this.payment; //로또 구입 금액
    this.ticketNums; //발행한 로또 수량
    this.allLines;
    this.winningNums; //로또 당첨 번호
    this.bonusOrNot = false;
    this.profit;
  };

  //10. 당첨 통계 - 수익률 계산 후 출력
  calculateProfitRate(profit, payment) {
    this.profitRate = ((profit / payment) * 100).toFixed(1);

    Console.print('총 수익률은 '+ this.profitRate  + '%입니다.');
    Console.close(); //로도 게임 종료
    return this.profitRate;
  }
  //수익 계산
  calculateProfit(rankCntList) {
    this.profit = rankCntList[0]* FIFTH_PRIZE + rankCntList[1]* FOURTH_PRIZE + rankCntList[2]* THIRD_PRIZE + rankCntList[3]* SECOND_PRIZE+ rankCntList[4]* FIRST_PRIZE;

    return this.calculateProfitRate(this.profit, this.payment);
  }

  countRank(rankList) {
    const rankFiveCnt = rankList.filter(element => 5 === element).length; //5등(3개 일치)인 줄 수 세기
    const rankFourCnt = rankList.filter(element => 4 === element).length;
    const rankThreeCnt = rankList.filter(element => 3 === element).length;
    const rankTwoCnt = rankList.filter(element => 2 === element).length;
    const rankOneCnt = rankList.filter(element => 1 === element).length;
    
    const rankCntList = [rankFiveCnt, rankFourCnt, rankThreeCnt, rankTwoCnt, rankOneCnt];

    showGameRank(rankCntList); //9. 당첨 통계 - 당첨 내역 문구 출력

    return rankCntList;
  }  

  calculateRank(answerCnt) {
    if(answerCnt == 6) return 1; //6개 일치 -> 1등 당첨
    if(answerCnt == 5 && this.bonusOrNot) return 2; //5개 일치 + 보너스 번호도 일치 -> 2등 당첨
    if(answerCnt == 5) return 3; //6개 일치 -> 3등 당첨
    if(answerCnt == 4) return 4;
    if(answerCnt == 3) return 5;
    return 0;
  }

  countAnswerNums(oneLine, winningNums){
    const count = oneLine.filter(x => winningNums.includes(x)).length;
    return count;
  }
  //5개가 일치하는 로또 번호들 중에서 보너스 번호도 포함되는지 계산
  checkBonusOrNot(oneLine, bonusNum) {
    if(oneLine.includes(bonusNum)) return true;
  }
  //8. 당첨 통계 - 당첨 내역 계산
  calculateGameResult(bonusNum) {
    Console.print(LOTTO_STATISTICS);
    const rankList = [];
    
    for(var i=0;i<this.allLines.length;i++){
      const oneLine = this.allLines[i];
      const answerCnt = this.countAnswerNums(oneLine, this.winningNums);
      if(answerCnt == ANSWER_NUM_FIVE) this.bonusOrNot = this.checkBonusOrNot(oneLine, bonusNum)

      const rank = this.calculateRank(answerCnt);
      rankList.push(rank);
    }
    const rankCntList = this.countRank(rankList);
  
    return this.calculateProfit(rankCntList);
  }

  //6. 보너스 번호 입력받기
  enterBonus(){
    Console.readLine(BONUS_INPUT_MESSAGE,(bonus) =>{
      bonusValidate(bonus, this.winningNums);
      return this.calculateGameResult(bonus);
    })  
  }

  //5. 당첨 번호 입력받기
  enterWinningNums(){
    Console.readLine(ANSWER_INPUT_MESSAGE, (answer) =>{
      const answerList = answer.split(','); //5-1. 당첨 번호 쉼표 기준으로 구분하여 6개의 숫자 배열로 만들기
      const lotto = new Lotto(answerList);
      this.winningNums = Array.from(answerList).map((i) => Number(i)); //문자열을 Number형 배열로 변환

      return this.enterBonus();

    })
  }

//4. 로또 수량만큼 랜덤으로 로또 번호 생성하고 출력하기
  generateLottoNums(ticketNums){
    const allLines = []; 
    for(var i=0; i<ticketNums; i++){
      const oneLine = Random.pickUniqueNumbersInRange(LOTTO_START, LOTTO_END, LOTTO_NUM);
      allLines.push(oneLine); 
    }
  
    allLines.forEach((oneLine)=>{
      Console.print(`[${oneLine.join(", ")}]`) //로또 번호 출력하기
    });
    
    this.allLines = allLines;
    return this.enterWinningNums(); 
  }

  //3. 로또 수량 계산하고 출력하기
  calculateTicketNums(total) { 
    const ticketNums = parseInt(total) / MONEY_UNIT;
    this.ticketNums = ticketNums;
    Console.print('\n'+ this.ticketNums + PURCHASE_NUM_MESSAGE);
    
    return ticketNums;
  }

  //1. 로또 구입 금액 입력받기
  payLottoMoney() {  
    Console.readLine(GAME_START_MESSAGE, (total) => {    
      payValidate(total); //2. 구입 금액이 1,000원 단위인지 체크
      this.payment = total;
      this.ticketNums = this.calculateTicketNums(total);
      this.generateLottoNums(this.ticketNums);
    });
  }

  play() {
    this.payLottoMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
