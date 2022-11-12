const MissionUtils = require("@woowacourse/mission-utils");

class App {
  money=0;
  userLottoNumbers=[];
  winningNumbers=[];

  constructor(){

  }

  play() {
    this.insertMoney();
  }

  insertMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      this.money = answer/1000;
      this.makeLottoNumber();
    })
  }

  makeLottoNumber(){
    for(let i=0; i<this.money; i++){
      const numbers = this.lottoNumberSort(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
      this.lottoNumberPrint(numbers);
      this.userLottoNumbers.push(numbers);
    }
    this.winningNumberInput();
  }

  lottoNumberPrint(numbers){
    MissionUtils.Console.print("["+numbers.join(", ")+"]")
  }

  lottoNumberSort(numbers){
    function compareNumbers(a, b) {
      return a - b;
    }

    return numbers.sort(compareNumbers)
  }

  winningNumberInput(){
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
      this.winningNumbers=answer.split(',');
    })
  }

 
}
const app = new App();
app.play();
module.exports = App;
