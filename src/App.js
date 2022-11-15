const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto.js');
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
    MissionUtils.Console.readLine(`구입금액을 입력해 주세요 \n`, (getMoney) => {
      this.checkInputMoney(getMoney);
      let amount = parseInt(getMoney)/1000;
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
      let lottoArray = this.createLottoNumber()
      this.UsersLotto.push(lottoArray);
      MissionUtils.Console.print(`[${lottoArray.join(", ")}]`);
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
    MissionUtils.Console.readLine(`\n당첨 번호를 입력해주세요 :\n`, (winningNumber) => {
      let winningArray = winningNumber.split(",").map(Number);
      this.WinningLotto=this.sortNumber(winningArray);
      this.getBonusNumber();
    });
  }

  getBonusNumber(){
    MissionUtils.Console.readLine(`\n보너스 번호를 입력해주세요 :\n`, (bonusInput) => {
      if(this.WinningLotto.includes(parseInt(bonusInput))){
        throw new Error("[ERROR] 보너스 번호와 당첨 번호가 겹칩니다.");
      }
      this.bonusNumber = parseInt(bonusInput);
      this.checkLotto();
      MissionUtils.Console.close();
    });
  }

  checkLotto(){
    let lotto = new Lotto(this.WinningLotto);
    lotto.checkWinning(this.UsersLotto, this.bonusNumber);
    lotto.printResult();
    lotto.calculateProfit(this.UsersLotto.length);
  }
}

// let app = new App();
// app.play();

module.exports = App;