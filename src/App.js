const MissionUtils = require("@woowacourse/mission-utils");
class App {

  constructor(){
    this.UsersLotto = [];
    this.WinningLotto = [];
    this.bonusNumber = 0;
  }

  play() {
    this.InputMoney();
  }

  InputMoney(){
    MissionUtils.Console.readLine('구입 금액을 입력해주세요 : ', (money) => {
      this.money = parseInt(money);
      let amount = money/1000;
      this.getUsersLottoArray(amount);
    });
  }

  getUsersLottoArray(amount){
    MissionUtils.Console.print(`\n${amount}개를 구매했습니다.`);
    for (let i=0; i<amount; i++){
      this.UsersLotto.push(his.createLottoNumber());
    }
    this.getWinningNumber();
  }

  createLottoNumber(){
    let lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber=this.sortNumber(lottoNumber);
    return lottoNumber;
  }

  sortNumber(numberArray){
    numberArray.sort((a, b) => a - b);
    return numberArray;
  }

  getWinningNumber(){
    MissionUtils.Console.readLine("당첨 번호를 입력해주세요 : ", (winningNumber) => {
      let winningArray = winningNumber.split(",").map(Number);
      this.WinningLotto=this.sortNumber(winningArray);
      this.getBonusNumber();
    });
  }

  getBonusNumber(){
    MissionUtils.Console.readLine("보너스 번호를 입력해주세요 : ", (bonusInput) => {
      this.bonusNumber = parseInt(bonusInput);
      MissionUtils.Console.close();
    });
  }
}

// let app = new App();
// app.play();

module.exports = App;