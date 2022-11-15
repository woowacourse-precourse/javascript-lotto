const MissionUtils = require("@woowacourse/mission-utils");
class App {

  constructor(){
    this.UsersLotto = [];
    this.WinningLotto = [];
    this.bonusNumber = 0;
  }

  play() {
    this.userInput();
  }

  userInput(){
    MissionUtils.Console.readLine('구입 금액을 입력해주세요 : ', (money) => {
      this.checkInputMoney(getMoney);
      let amount = parseInt(money)/1000;
      this.getUsersLottoArray(amount);
    });
  }

  checkInputMoney(money){
    if (isNaN(+money)) {
      throw new Error("[ERROR] 금액은 숫자만 입력해주세요.");
    }

    if (money < 1000){
      throw new Error("[ERROR] 금액은 1000원 이상이어야 합니다.");
    }
    
    if (money % 1000 !== 0){
      throw new Error("[ERROR] 금액은 1000원 단위여야 합니다.");
    }
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
      if(this.WinningLotto.includes(parseInt(bonusInput))){
        throw new Error("[ERROR] 보너스 번호와 당첨 번호가 겹칩니다.");
      }
      this.bonusNumber = parseInt(bonusInput);
      MissionUtils.Console.close();
    });
  }
}

// let app = new App();
// app.play();

module.exports = App;