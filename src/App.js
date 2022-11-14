const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const PRICE = 1000
class App {
  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요 : ', (money) => {
      this.verificateMoney(money)
      let myLotto = this.issueLotto(money);
      this.showIssuedLotto(myLotto);
      MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요 : ', (winningNumbers) => {
        this.verificateWinningNumbers(winningNumbers);
        MissionUtils.Console.readLine('\n보너스번호를 입력해 주세요 : ', (bonusNumber) => {
          this.verificateBonusNumber(winningNumbers,bonusNumber);
          this.isJackpot(myLotto,winningNumbers,bonusNumber);
        });
      });
    });
  }
  verificateWinningNumbers(winningNumbers){
    winningNumbers = winningNumbers.split(',').map((i)=>Number(i));
    const winningNumbersSet = new Set(winningNumbers);
    if(winningNumbers.length !== winningNumbersSet.size){
      throw new Error("[ERROR] 당첨 번호는 중복되지 않아야합니다.");
    }
    winningNumbers.map(function(element){
      if(!(element>=1&&element<=45)){
        throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    })
    if(winningNumbers.length !== 6){
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
  }
  verificateBonusNumber(winningNumbers,bonusNumber){
    winningNumbers = winningNumbers.split(',').map((i)=>Number(i));
    if(winningNumbers.includes(Number(bonusNumber))){
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야합니다.");
    }
    if(!(bonusNumber>=1&&bonusNumber<=45)){
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
  verificateMoney(money){
    if(money % PRICE != 0) throw new Error('[ERROR] 구입금액은 1000원 단위여야 합니다')
  }
  issueLotto(money){
    let myLotto = [];
    for(let i=0;i<money/PRICE;i++){
      let newLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      myLotto[`lotto${i}`] = new Lotto(newLotto);
    }
    return myLotto;
  }
  showIssuedLotto(myLotto){
    const NUMBER_OF_LOTTO = Object.keys(myLotto).length;
    MissionUtils.Console.print("\n" + NUMBER_OF_LOTTO + "개를 구매했습니다.")
    for(let i=0;i<NUMBER_OF_LOTTO;i++){
      MissionUtils.Console.print(myLotto[`lotto${i}`].getLotto().sort(function compare(a, b) { //오름차순으로 정렬
        return a - b;
      }));
    }
  }
  isJackpot(myLotto,winningNumbers,bonusNumber){
   
    
  }
 
}
const app = new App();
app.play();

module.exports = App;
