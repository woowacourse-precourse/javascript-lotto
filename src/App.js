const MissionUtils = require("@woowacourse/mission-utils");

class App {
  money=0;
  userLottoNumbers=[];

  constructor(){

  }

  play() {
    this.insertMoney();
  }

  insertMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해 주세요. ', (answer) => {
      this.money = answer/1000;
      this.makeLottoNumber();
  })
  }

  makeLottoNumber(){
    for(let i=0; i<this.money; i++){
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.userLottoNumbers.push(numbers);
    }
    MissionUtils.Console.print(this.userLottoNumbers)
    MissionUtils.Console.close();
  }

}
const app = new App();
app.play();
module.exports = App;
