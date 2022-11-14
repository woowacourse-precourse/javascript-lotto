const {Console} = require("@woowacourse/mission-utils");
const {Random} = require("@woowacourse/mission-utils");
const payValidate = require("./payValidate");
const { GAME_START_MESSAGE,PRINT_MESSAGE, RESULT_MESSAGE, ANSWER_INPUT_MESSAGE, BONUS_INPUT_MESSAGE } = require("./message.js");
const {MONEY_UNIT, LOTTO_START, LOTTO_END, LOTTO_NUM} = require("./constants.js");

const Lotto = require("./Lotto");

class App {
  constructor() {
    this.payment; //로또 구입 금액
    this.ticketNums; //발행한 로또 수량
    this.allLines;
    this.winningNums; //로또 당첨 번호
    this.profit;
  };

  calculateProfitRate(rankCntList) {
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

  calculateGameResult(bonusNum) {
    Console.print('\n당첨 통계\n---');
    const rankList = [];
    let bonusOrNot = false;
    
    console.log(this.allLines);
    console.log(this.winningNums);

    for(var i=0;i<this.allLines.length;i++){
      const oneLine = this.allLines[i];
      const answerCnt = oneLine.filter(x => this.winningNums.includes(x)).length;
      if(answerCnt == 5) {
        if(oneLine.includes(bonusNum)) bonusOrNot = true;
      }
      const rank = this.calculateRank(answerCnt, bonusOrNot);
      rankList.push(rank);
    }
    //console.log(rankList);
    const rankCntList = this.showResultPhrase(rankList);
  
    return this.calculateProfitRate(rankCntList);
  }

  //6. 보너스 번호 입력받기
  enterBonus(){
    Console.readLine(BONUS_INPUT_MESSAGE,(bonus) =>{
      //payValidation(bonus);
      if(this.winningNums.includes(parseInt(bonus))){
        throw new Error('보너스 번호가 당첨 번호와 중복됩니다.')
      }
      //console.log('보너스 번호는... ',bonus);
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

//4. 로또 수량만큼 랜덤으로 로또 번호 생성
  makeLottoNums(ticketNums){
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


  showTicketNums(money) { //3. 로또 수량 계산하고 출력하기
    const ticketNums = parseInt(money) / MONEY_UNIT;
    this.ticketNums = ticketNums;
    Console.print('\n'+ this.ticketNums + PRINT_MESSAGE);
    
    return this.makeLottoNums(ticketNums);
  }

  //1. 로또 구입 금액 입력받기
  payLottoMoney() {  
    Console.readLine(GAME_START_MESSAGE, (total) => {    
      payValidate(total); //2. 구입 금액이 1,000원 단위인지 체크
      this.payment = total;
      return this.showTicketNums(total);
    });
  }

  play() {
    this.ticketNums = this.payLottoMoney(); 

  }
}

const app = new App();
app.play();

module.exports = App;
