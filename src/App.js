const {Console} = require("@woowacourse/mission-utils");
const {Random} = require("@woowacourse/mission-utils");
const generalValidation = require("./generalValidation.js");
const {RESULT_MESSAGE} = require("./constant.js");

const Lotto = require("./Lotto.js");

class App {
  constructor() {
    this.payment;
    this.profit;
  };

  getErrorMessage(errorCase){
    const ERROR_MESSAGE = '[ERROR] ';
    let NEW_ERROR = '';
    if(errorCase == 'unitError') {
        NEW_ERROR = ERROR_MESSAGE +  '1000원 단위로 입력해 주세요.';
    } else if(errorCase == 'bonusError'){
        NEW_ERROR = ERROR_MESSAGE +  '당첨 번호들이 아닌 번호를 입력해 주세요.';
    }
    return NEW_ERROR;
  }
/*
  showProfitRate(payment, profit) {

    Console.print(`총 수익률은 ${profit}입니다.`);
  }
*/
  calculateRank(answerCnt, bonusOrNot) {
    if(answerCnt == 6) return 1;
    if(answerCnt == 5 && bonusOrNot) return 2;
    if(answerCnt == 5) return 3;
    if(answerCnt == 4) return 4;
    if(answerCnt == 3) return 5;
    return 0;
  }
  calculateGameResult(allLines, winningNums, bonusNum) {
    Console.print('당첨 통계\n---\n');
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
    return rankList;
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
      Console.print(oneLine);
    }

    this.enterWinningNums(allLines);
    //console.log(allLines);
  }


  showLottoAmount(money) {
    this.amount = parseInt(money)/1000;
    Console.print(`\n${this.amount}개를 구매했습니다.`);
    
    this.makeLottoNums(this.amount);
    //return this.amount;
  }

  //1. 로또 구입 금액 입력받기
  payLottoMoney() {  
    //let lottoAmount;
    Console.readLine('구입금액을 입력해 주세요.\n', (total) => {
      //console.log(`구입금액: ${total}`);

      //1-1. 구입 금액의 단위에 대한 예외 처리
      generalValidation(total);

      if(parseInt(total) % 1000 != 0){      
        Console.print(this.getErrorMessage('unitError'));
        throw '1000원 단위로 입력되지 않음'; //1-2. 예외 출력
      } 
      this.payment = total;
      return this.showLottoAmount(total);
      //console.log('로또 수량은...',this.amount)
    });
  }

  buyLotto(amount) {

  }

  play() {
    this.amount = this.payLottoMoney(); //1)로또 구입 금액 입력
    //console.log('구매 금액은 ...',this.money);
    //this.amount = this.showLottoAmount(this.money); //2)발행한 로또 수량 및 번호 출력
    //console.log('로또 수량은...',this.amount);

    //MissionUtils.Console.close();

  }
}

const app = new App();
app.play();

module.exports = App;
