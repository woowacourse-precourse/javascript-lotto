const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const Bonus = require("./Bonus.js");
class App {
  insertedMoney;
  bonusNumber;
  prizeNumbers = [];
  userLottoNumberLists = [];
  userWinningStatics = [0,0,0,0,0];

  async play() {
    await this.insertMoney();
    const LOTTO_COUNT = this.insertedMoney / 1000;
    for(let count = 0; count <LOTTO_COUNT; count++){
      this.userLottoNumberLists.push(this.generateUserLottoNumber());
    }
    this.printLottoCount(LOTTO_COUNT);
    await this.enterPrizeNumber();
    const lotto = new Lotto(this.prizeNumbers);
    await this.enterBonusNumber();
    const bonus = new Bonus(lotto.getNumbers(), this.bonusNumber);
    this.userLottoNumberLists.forEach((OneUserNumber)=>{
      this.comparePrizeNumberAndUserNumber(lotto.getNumbers(), bonus.getNumbers(),OneUserNumber);
    });
    const earnMoney = this.calcEarnMoney(this.userWinningStatics);
    const RateOfReturn = this.calcRateOfReturn(this.insertedMoney, earnMoney);
    this.printUserWinningStatics(this.userWinningStatics);
    this.printRateOfRetrun(RateOfReturn);
  }
  insertMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해주세요 (1000원 단위)', (insertMoney) => {
      this.insertMoneyValidCheck(insertMoney);
      this.insertedMoney = insertMoney;
    });
  }
  insertMoneyValidCheck(insertMoney) {
    this.isUnit1000(insertMoney);
    this.isNegativeNumber(insertMoney);
    this.isNumber(insertMoney);
  }
  isUnit1000(insertMoney){
    if (insertMoney % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 금액을 투입해주세요.");
    }
  }
  isNegativeNumber(insertMoney){
    if (insertMoney <= 0) {
      throw new Error("[ERROR] 음수 또는 0원은 투입할 수 없습니다.");
    }
  }
  isNumber(inputNumber){
    const IS_NOT_NUMBER = /\D/g;
    if(IS_NOT_NUMBER.test(inputNumber)){
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
  }
  printLottoCount(LottoCount){
    MissionUtils.Console.print(`${LottoCount}개를 구매했습니다.`);
    this.printGenerateUserLottoNumber(this.userLottoNumberLists);
  }
  generateUserLottoNumber(){
    const generatedNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedNumbers = this.sortUserLottoNumber(generatedNumbers);
    return sortedNumbers;
  }
  sortUserLottoNumber(generatedNumbers){
    const sortedNumbers = generatedNumbers.sort((front,back)=>(front-back));
    return sortedNumbers;
  }
  printGenerateUserLottoNumber(userLottoLists){
    userLottoLists.forEach((userLottoList)=>{
      MissionUtils.Console.print(userLottoList);
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
