const MissionUtils = require("@woowacourse/mission-utils");

class App {
  lottoCount=0;
  userLottoNumbers=[];
  winningNumbers=[];
  bonusNumber;

  constructor(){

  }

  play() {
    this.insertMoney();
  }

  insertMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      this.lottoCount = this.lottoPurchaseCount(answer);
      this.lottoCountPrint(this.lottoCount);
      this.makeLottoNumber();
    })
  }

  lottoPurchaseCount(money){
    return money/1000;
  }

  lottoCountPrint(number){
    MissionUtils.Console.print(number+"개를 구매했습니다.");
  }

  makeLottoNumber(){
    for(let i=0; i<this.lottoCount; i++){
      const numbers = this.lottoNumberSort(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
      this.lottoNumberPrint(numbers);
      this.userLottoNumbers.push(numbers);
    }
    this.winningNumberInput();
  }

  lottoNumberPrint(numbers){
    MissionUtils.Console.print("["+numbers+"]");
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
      this.BonusNumberInput();
    })
  }

  BonusNumberInput(){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
      this.bonusNumber=Number(answer);
      this.winningCount()
    })
  }

  winningCount(){
    for(let i=0; i<this.userLottoNumbers.length; i++){
      this.userLottoNumbers[i].filter(lotto => this.winningNumbers.includes(String(lotto))).length;
    }
  }

  

}
const app = new App();
app.play();
module.exports = App;
