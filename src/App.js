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
          let result = this.isJackpot(myLotto,winningNumbers,bonusNumber);
          this.showResult(money,result);
          MissionUtils.Console.close();
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
    let myLotto = { };
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
      MissionUtils.Console.print("["+(myLotto[`lotto${i}`].getLotto().sort(function compare(a, b) { //오름차순으로 정렬
        return a - b;
      })).join(', ')+"]");
    }
  }
  isJackpot(myLotto,winningNumbers,bonusNumber){
    let result = new Array();
    winningNumbers = winningNumbers.split(',').map((i)=>Number(i));
    winningNumbers.push(Number(bonusNumber))
    for(let i=0;i<Object.keys(myLotto).length;i++){
      let intersection = myLotto[`lotto${i}`].getLotto().filter(num => winningNumbers.includes(num));
      if(intersection.length === 6 && !(myLotto[`lotto${i}`].getLotto().includes(Number(bonusNumber)))){
          result.push(7) //6개일치는 5+보너스와 구별을 위해 7로 넣어준다
      }
      else result.push(intersection.length)
    }
    return this.makePlaceArray(result);
  }
  makePlaceArray(result){
    let place = [0,0,0,0,0] //순서대로 1,2,3,4,5등
    result.map(i=>{
      if(i === 7) place[0]+=1;
      if(i === 6) place[1]+=1;
      if(i === 5) place[2]+=1;
      if(i === 4) place[3]+=1;
      if(i === 3) place[4]+=1;
    })
    return place;
  }
  showResult(money,result){
    MissionUtils.Console.print('\n당첨 통계\n---')
    MissionUtils.Console.print('3개 일치 (5,000원) - '+result[4]+'개')
    MissionUtils.Console.print('4개 일치 (50,000원) - '+result[3]+'개')
    MissionUtils.Console.print('5개 일치 (1,500,000원) - '+result[2]+'개')
    MissionUtils.Console.print('5개 일치, 보너스 볼 일치 (30,000,000원) - '+result[1]+'개')
    MissionUtils.Console.print('6개 일치 (2,000,000,000원) - '+result[0]+'개')
    const rateOfReturn = ((result[0]*2000000000)+(result[1]*30000000)+(result[2]*1500000)+(result[3]*50000)+(result[4]*5000)*100)/money
    MissionUtils.Console.print('총 수익률은 '+rateOfReturn.toFixed(1)+'%입니다.');
  }
}   
const app = new App();
app.play();

module.exports = App;
