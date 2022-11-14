const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const Bonus = require("./Bonus.js");
const InsertMoney = require("./InsertMoney.js");
const GenerateUserLottoNumber = require("./GenerateUserLottoNumber.js");
class App {
  bonusNumber;
  prizeNumbers = [];
  userWinningStatics = [0,0,0,0,0];

  play() {
    const insertMoney = new InsertMoney();
    const LOTTO_COUNT = insertMoney.getInsertMoney() / 1000;
    const generateUserLottoNumber = new GenerateUserLottoNumber(LOTTO_COUNT);
    this.printLottoCount(LOTTO_COUNT);
    this.printGenerateUserLottoNumber(generateUserLottoNumber.getUserLottoNumberLists());
    this.enterPrizeNumber();
    const lotto = new Lotto(this.prizeNumbers);
    this.enterBonusNumber();
    const bonus = new Bonus(lotto.getNumbers(), this.bonusNumber);
    generateUserLottoNumber.getUserLottoNumberLists().forEach((OneUserNumber)=>{
      this.comparePrizeNumberAndUserNumber(lotto.getNumbers(), bonus.getNumbers(),OneUserNumber);
    });
    const earnMoney = this.calcEarnMoney(this.userWinningStatics);
    const RateOfReturn = this.calcRateOfReturn(insertMoney.getInsertMoney(), earnMoney);
    this.printUserWinningStatics(this.userWinningStatics);
    this.printRateOfRetrun(RateOfReturn);
  }
  printLottoCount(LottoCount){
    MissionUtils.Console.print(`${LottoCount}개를 구매했습니다.`);
  }
  printGenerateUserLottoNumber(userLottoLists){
    userLottoLists.forEach((userLottoList)=>{
      let userLotto = '[';
      userLottoList.forEach((index)=>{
        userLotto+=index;
        userLotto+=',';
        userLotto+=' ';
      });
      userLotto = userLotto.slice(0,userLotto.length-2);
      userLotto+=']';
      MissionUtils.Console.print(userLotto);
    });
  }
  enterPrizeNumber(){
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (inputPrizeNumberWithComma) => {
    const prizeNumberList = this.splitWordsToComma(inputPrizeNumberWithComma);
    this.prizeNumbers = prizeNumberList;
    });
  }
  splitWordsToComma(words){
    const wordsList = words.split(",").map(Number);
    return wordsList;
  }
  enterBonusNumber(){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (inputBonusNumber) => {
      this.bonusNumber = [Number(inputBonusNumber)];
    });
  }
  comparePrizeNumberAndUserNumber(lottoNumbers, bonusNumber, userNumbers){
    let count = 0;
    userNumbers.forEach((userNumber)=>{
      lottoNumbers.forEach((lottoNumber)=>{
        if(userNumber === lottoNumber){
          count+=1;
        }
      })
    });
    const state = this.checkBonusNumber(bonusNumber, userNumbers);
    count += state[0];
    const isBonus = state[1];
    this.addWinningStatics(count,isBonus);
  }
  checkBonusNumber(bonusNumber, userNumbers){
    if(userNumbers.includes(...bonusNumber)){
      return [1,true];
    }else {
      return [0,false];
    }
  }
  addWinningStatics(count, isBonus){
    if(count===6){
      this.userWinningStatics[0] +=1;
    }else if(count === 5 && isBonus){
      this.userWinningStatics[1] +=1;
    }else if(count === 5){
      this.userWinningStatics[2] +=1;
    }else if(count === 4){
      this.userWinningStatics[3] +=1;
    }else if(count === 3){
      this.userWinningStatics[4] +=1;
    }
  }
  printUserWinningStatics(winningStatic){
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print("3개 일치 (5,000원) - "+winningStatic[4]+"개");
    MissionUtils.Console.print("4개 일치 (50,000원) - "+winningStatic[3]+"개");
    MissionUtils.Console.print("5개 일치 (1,500,000원) - "+winningStatic[2]+"개");
    MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - "+winningStatic[1]+"개");
    MissionUtils.Console.print("6개 일치 (2,000,000,000원) - "+winningStatic[0]+"개");
  }
  calcEarnMoney(winningStatic){
    let winningMoney = winningStatic[4]*5000 +  winningStatic[3]*50000 +  winningStatic[2]*1500000 +  winningStatic[1]*30000000 +  winningStatic[0]*2000000000;
    return winningMoney;
  }
  calcRateOfReturn(inputMoney, earnMoney){
    const RateOfReturn = (earnMoney/inputMoney)*100;
    return this.calcDecimalPointTwo(RateOfReturn);
  }
  calcDecimalPointTwo(RateOfReturn){
    return Math.round(RateOfReturn*100)/100;
  }
  printRateOfRetrun(RateOfReturn){
    MissionUtils.Console.print("총 수익률은 "+RateOfReturn+"%입니다.");
    MissionUtils.Console.close();
  }
}

module.exports = App;
