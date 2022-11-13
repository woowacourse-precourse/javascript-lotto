const {Console} = require("@woowacourse/mission-utils");
const {Random} = require("@woowacourse/mission-utils");

const lotto = require("./Lotto");

class App {
  constructor() {};
  getErrorMessage(errorCase){
    const ERROR_MESSAGE = '[ERROR] ';
    let NEW_ERROR = '';
    if(errorCase == 'unitError') {
        NEW_ERROR = ERROR_MESSAGE +  '1000원 단위로 입력해 주세요.';
    }
    return NEW_ERROR;
  }
/*
  enterBonus(){
    Console.readLine('보너스 번호를 입력해 주세요.\n',(bonus) =>{

    })  
    return;
  }
*/
  enterAnswerNums(){
    Console.readLine('\n당첨 번호를 입력해 주세요.\n',(answer) =>{
      const answerList = answer.split(',');
      console.log(answerList);
    })
    return;
  }
/*
  enterLottoAnswer(){
    
  }
*/
  makeLottoNums(amount){
    let allLines = []; //
    for(var i=0; i<amount; i++){
      const oneLine = Random.pickUniqueNumbersInRange(1, 45, 6);
      allLines.push(oneLine);
      Console.print(oneLine);
    }

    this.enterAnswerNums();
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
      if(parseInt(total) % 1000 != 0){      
        Console.print(this.getErrorMessage('unitError'));
        throw '1000원 단위로 입력되지 않음'; //1-2. 예외 출력
      } 
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
