const MissionUtils = require("@woowacourse/mission-utils");
const {PAYMENT_MESSAGE,SELECT_NUMBER_MESSAGE,RESULT_MESSAGE,BLANK_SPACE, RESULT_PLACE_MESSAGE} =require("./stringConst");
const {REWARD,MATCH } =require("./numberConst");
const Lotto = require("./Lotto");
const BonusNumberError = require("./BonusNumberError");
const TotalRatio =  require("./TotalRatio");
const PayError = require("./PayError");



class App {
  constructor(){
    this.randomNumbersArr = [];
    this.randomNumbersArrForPrint = [];
    this.selectedWinNumber = [];
    this.selectedBonusNumber = [];
    this.myPayment = "";
    this.myRandomNumberArr= "";
  }
  play() {
    this.pay()
  }
  pay() {
    MissionUtils.Console.readLine(`${PAYMENT_MESSAGE.request}\n`, (payment) => {
      const payError = new PayError(payment);
      payError.validatePay(payment); 
      this.printLotto(payment);
    });
  }

  generateRandomNumbers() {
    const Rannumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedRandomNumbers = Rannumbers.sort((a, b) => a - b);
    this.randomNumbersArr.push(sortedRandomNumbers);

    const sortedRandomNumbersForPrint = sortedRandomNumbers.join(", ");
    this.randomNumbersArrForPrint.push(sortedRandomNumbersForPrint);
  }
  repeatGenerateRandomNumbers(countedSheets){ 
    for (let i = 0; i < countedSheets; i++) {
      this.generateRandomNumbers();
    }
    const joined = this.randomNumbersArrForPrint.join(`]\n[`)
    return `[${joined}]`;
  }
  printLotto(payment) { 
    this.myPayment = payment
    const countedSheets = payment / 1000;

    MissionUtils.Console.print(`\n${countedSheets}개를 구매했습니다.\n${this.repeatGenerateRandomNumbers(countedSheets)}`);
    MissionUtils.Console.print(BLANK_SPACE.line); 
    this.selectWinNumbers()
  }

  selectWinNumbers() {
    MissionUtils.Console.print(SELECT_NUMBER_MESSAGE.winNumber);
    this.inputWinNumbers();
  }
  inputWinNumbers() {
    MissionUtils.Console.readLine("", (winNumber) => {
      const numbers = winNumber.split(",").map(Number);
      const lotto = new Lotto(numbers);
      lotto.validate(numbers); 
      for (let i = 0; i < 6; i++) {
        this.selectedWinNumber.push(numbers[i]);
      }
      MissionUtils.Console.print(BLANK_SPACE.line); 
      this.selectBonusNumber();
    });
  }
  selectBonusNumber() {
    MissionUtils.Console.print(SELECT_NUMBER_MESSAGE.bonusNumber);
    this.inputBonusNumber();
  }
  inputBonusNumber() {
    MissionUtils.Console.readLine("", (bonusNumber) => {
      const bonusNumberError = new BonusNumberError(bonusNumber);
      bonusNumberError.validateBonusNumber(bonusNumber); 
      
      this.selectedBonusNumber.push(Number(bonusNumber));
      MissionUtils.Console.print(BLANK_SPACE.line); 
      this.isDuplicatedNumber(bonusNumber);
      this.compareNumbers();
    });
  }
  isDuplicatedNumber(bonusNumber){
    if(this.selectedWinNumber.includes(Number(bonusNumber))){
      throw new Error("[ERROR] 당첨 번호와 겹치지 않는 보너스 번호를 입력해 주세요.");
    }
  }
  compareNumbers() {
    let countMatchedNumber = []
    let countMatchedBonusNumber = []
    for (let i = 0; i < this.randomNumbersArr.length; i++) {
      let matchedNumber = this.selectedWinNumber.filter((matched) => this.randomNumbersArr[i].includes(matched)).length;
        countMatchedNumber.push(matchedNumber);
    } 
    for (let i = 0; i < this.randomNumbersArr.length; i++) {
      let matchedBonusNumber = this.selectedBonusNumber.filter((matched) =>this.randomNumbersArr[i].includes(matched)).length;
        countMatchedBonusNumber.push(matchedBonusNumber);
    }  
    this.getWinners(countMatchedNumber,countMatchedBonusNumber) 
  }

  getWinners(countMatchedNumber,countMatchedBonusNumber) {
    const firstPlace = countMatchedNumber.filter(element => MATCH.six === element).length
    const fourthPlace = countMatchedNumber.filter(element => MATCH.four === element).length
    const fifthPlace = countMatchedNumber.filter(element => MATCH.three === element).length
    this.isWinnerIncludesBonusNumber(firstPlace,fourthPlace,fifthPlace,countMatchedNumber,countMatchedBonusNumber);
  }
  
  isWinnerIncludesBonusNumber (firstPlace,fourthPlace,fifthPlace,countMatchedNumber,countMatchedBonusNumber){ 
    let secondPlace = 0;
    let thirdPlace = 0; 
    for (let i = 0; i <  countMatchedNumber.length; i++) {
      if(countMatchedNumber[i] === MATCH.five && countMatchedBonusNumber[i] === MATCH.bonus) 
      secondPlace++;
    }
    for (let i = 0; i <  countMatchedNumber.length; i++) {
      if(countMatchedNumber.includes(MATCH.five) 
      && countMatchedNumber[i] === MATCH.five && countMatchedBonusNumber[i] !== MATCH.bonus) 
      thirdPlace++;
    }
    this.calculateYieldRatio(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace);
  }

  calculateYieldRatio(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace){
    const addReward = 
    (REWARD.first * firstPlace) 
    + (REWARD.second * secondPlace) 
    + (REWARD.third * thirdPlace) 
    + (REWARD.fourth * fourthPlace) 
    + (REWARD.fifth * fifthPlace) 

    const positiveTotalCalculate = ((this.myPayment - addReward) / this.myPayment) * 100
    const negativeTotalCalculate = 100 - positiveTotalCalculate

    this.seeResult(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace,positiveTotalCalculate,negativeTotalCalculate);
  }

  seeResult(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace,positiveTotalCalculate,negativeTotalCalculate) {
    MissionUtils.Console.print(RESULT_MESSAGE.statistics);
    MissionUtils.Console.print(`${RESULT_PLACE_MESSAGE.fifth}${fifthPlace}개`);
    MissionUtils.Console.print(`${RESULT_PLACE_MESSAGE.fourth}${fourthPlace}개`);
    MissionUtils.Console.print(`${RESULT_PLACE_MESSAGE.third}${thirdPlace}개`);
    MissionUtils.Console.print(`${RESULT_PLACE_MESSAGE.second}${secondPlace}개`);
    MissionUtils.Console.print(`${RESULT_PLACE_MESSAGE.first}${firstPlace}개`);
    MissionUtils.Console.close();
    const totalRatio = new TotalRatio(positiveTotalCalculate,negativeTotalCalculate);
    totalRatio.roundDecimalPoint(positiveTotalCalculate,negativeTotalCalculate,); 



  }

}

const app = new App();
app.play();

module.exports = App;
