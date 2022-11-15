const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  LOTTO,
  REWARD,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE } = require("./util/constants")

class App {
  play() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.MONEY, (money) => {
      this.verificateMoney(money)
      let myLotto = this.issueLotto(money);
      this.showIssuedLotto(myLotto);
      MissionUtils.Console.readLine(INPUT_MESSAGE.WINNING_NUMBER, (winningNumbers) => {
        this.verificateWinningNumbers(winningNumbers);
        MissionUtils.Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (bonusNumber) => {
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
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATED);
    }
    winningNumbers.map(function(element){
      if(!(element>=1&&element<=45)){
        throw new Error(ERROR_MESSAGE.WINNING_NUMBER_OUT_OF_RANGE);
      }
    })
    if(winningNumbers.length !== 6){
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_MISMATCH);
    }
  }
  verificateBonusNumber(winningNumbers,bonusNumber){
    winningNumbers = winningNumbers.split(', ').map((i)=>Number(i));
    if(winningNumbers.includes(Number(bonusNumber))){
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATED);
    }
    if(!(bonusNumber>=1&&bonusNumber<=45)){
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_OUT_OF_RANGE);
    }
  }
  verificateMoney(money){
    if(money % LOTTO.PRICE != 0) throw new Error(ERROR_MESSAGE.MONEY_OUT_OF_RANGE);
  }
  issueLotto(money){
    let myLotto = { };
    for(let i=0;i<money/ LOTTO.PRICE;i++){
      let newLotto = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.COUNT);
      myLotto[i] = new Lotto(newLotto);
    }
    return myLotto;
  }
  showIssuedLotto(myLotto){
    const NUMBER_OF_LOTTO = Object.keys(myLotto).length;
    MissionUtils.Console.print(RESULT_MESSAGE.HOW_MANY_TICKET(NUMBER_OF_LOTTO))
    for(let i=0;i<NUMBER_OF_LOTTO;i++){
      MissionUtils.Console.print("["+(myLotto[i].getLotto().sort(function compare(a, b) { //오름차순으로 정렬
        return a - b;
      })).join(', ')+"]");
    }
  }
  isJackpot(myLotto,winningNumbers,bonusNumber){
    let result = new Array();
    winningNumbers = winningNumbers.split(',').map((i)=>Number(i));
    winningNumbers.push(Number(bonusNumber))
    for(let i=0;i<Object.keys(myLotto).length;i++){
      let intersection = myLotto[i].getLotto().filter(num => winningNumbers.includes(num));
      if(intersection.length === 6 && !(myLotto[i].getLotto().includes(Number(bonusNumber)))){
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
    MissionUtils.Console.print(RESULT_MESSAGE.WIN_LIST_TITLE)
    MissionUtils.Console.print(RESULT_MESSAGE.WIN_FIFTH_PLACE(result[4]))
    MissionUtils.Console.print(RESULT_MESSAGE.WIN_FOURTH_PLACE(result[3]))
    MissionUtils.Console.print(RESULT_MESSAGE.WIN_THIRD_PLACE(result[2]))
    MissionUtils.Console.print(RESULT_MESSAGE.WIN_SECOND_PLACE(result[1]))
    MissionUtils.Console.print(RESULT_MESSAGE.WIN_FIRST_PLACE(result[0]))
    const rateOfReturn = ((result[0]*REWARD.FIRST_PLACE)+(result[1]*REWARD.SECOND_PLACE)+(result[2]*REWARD.THIRD_PLACE)+(result[3]*REWARD.FOURTH_PLACE)+(result[4]*REWARD.FIFTH_PLACE)*100)/money
    MissionUtils.Console.print(RESULT_MESSAGE.RATE_OF_RETURN(rateOfReturn));
  }
}   
const app = new App();
app.play();

module.exports = App;
