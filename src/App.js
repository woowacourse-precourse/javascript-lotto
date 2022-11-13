const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const BonusNumberError = require("./BonusNumberError");
const TotalRatio =  require("./TotalRatio");
const PayError = require("./PayError");
const {PAYMENT_MESSAGE,SELECT_NUMBER_MESSAGE,RESULT_MESSAGE,BLANK_SPACE, RESULT_PLACE} =require("./stringConst");
const {REWARD,MATCH } =require("./numberConst");


class App {
  constructor(){
    this.randomNumbersArr = [];
    this.randomNumbersArrForPrint = [];
    this.selectedWinNumber = [];
    this.selectedBonusNumber = [];
    this.countMatchedNumber = [];
    this.countMatchedBonusNumber = [];
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

  // 랜덤번호 배열 뽑기
  generateRandomNumbers() {
    const Rannumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedRandomNumbers = Rannumbers.sort((a, b) => a - b);
    this.randomNumbersArr.push(sortedRandomNumbers);

    const sortedRandomNumbersForPrint = sortedRandomNumbers.join(", ");
    this.randomNumbersArrForPrint.push(sortedRandomNumbersForPrint);
  }
  repeatGenerateRandomNumbers(countedSheets){ // 이름 바꾸기 랜덤번호 뽑기를 반복시켜주는 함수
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
    MissionUtils.Console.readLine("", (numbers) => {

      const splitedWinNumber = numbers.split(",").map(Number);
      const lotto = new Lotto(splitedWinNumber);
      lotto.validate(splitedWinNumber); 

      console.log(splitedWinNumber)
      for (let i = 0; i < 6; i++) {
        this.selectedWinNumber.push(splitedWinNumber[i]);
      }
      MissionUtils.Console.print(BLANK_SPACE.line); // 공백
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
    
      MissionUtils.Console.print(BLANK_SPACE.line); // 공백
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
    for (let i = 0; i < this.randomNumbersArr.length; i++) {
      let matchedNumber = this.selectedWinNumber.filter((matched) =>
        this.randomNumbersArr[i].includes(matched)
      ).length;
      this.countMatchedNumber.push(matchedNumber);
    } 
    for (let i = 0; i < this.randomNumbersArr.length; i++) {
      let matchedBonusNumber = this.selectedBonusNumber.filter((matched) =>
        this.randomNumbersArr[i].includes(matched)
      ).length;
      this.countMatchedBonusNumber.push(matchedBonusNumber);
    }  
    this.getWinners() 
  }

  getWinners() {
    const firstPlace = this.countMatchedNumber.filter(element =>MATCH.six === element).length
    let secondPlace = 0;
    let thirdPlace = 0; 
    const fourthPlace = this.countMatchedNumber.filter(element => MATCH.four === element).length
    const fifthPlace = this.countMatchedNumber.filter(element => MATCH.three === element).length
    for (let i = 0; i <  this.countMatchedNumber.length; i++) {
      if(this.countMatchedNumber[i] === MATCH.five && this.countMatchedBonusNumber[i] === MATCH.bonus) secondPlace++;
    }
    for (let i = 0; i <  this.countMatchedNumber.length; i++) {
      if(this.countMatchedNumber.includes(MATCH.five) && !this.countMatchedNumber[i] === MATCH.five && this.countMatchedBonusNumber[i] === MATCH.bonus) thirdPlace++;
    }
    this.calculateYieldRatio(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace);
  }

  calculateYieldRatio(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace){
    const addReward = (REWARD.first * firstPlace) + (REWARD.second * secondPlace) + (REWARD.third * thirdPlace) +(REWARD.fourth * fourthPlace) +(REWARD.fifth * fifthPlace) 

    const positiveTotalCalculate = ((this.myPayment - addReward) / this.myPayment) * 100
    const negativeTotalCalculate = 100 - positiveTotalCalculate

    // console.log(positiveTotalCalculate + "a")
    // console.log(negativeTotalCalculate + "a")
    this.seeResult(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace,positiveTotalCalculate,negativeTotalCalculate);
  }

  // 결과 출력
  seeResult(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace,positiveTotalCalculate,negativeTotalCalculate) {
    MissionUtils.Console.print(RESULT_MESSAGE.statistics);
    MissionUtils.Console.print(RESULT_MESSAGE.underscore);
    //  등수 개수 출력
    MissionUtils.Console.print(`${RESULT_PLACE.fifth}${fifthPlace}개`);
    MissionUtils.Console.print(`${RESULT_PLACE.fourth}${fourthPlace}개`);
    MissionUtils.Console.print(`${RESULT_PLACE.third}${thirdPlace}개`);
    MissionUtils.Console.print(`${RESULT_PLACE.second}${secondPlace}개`);
    MissionUtils.Console.print(`${RESULT_PLACE.first}${firstPlace}개`);
    MissionUtils.Console.close();

    const totalRatio = new TotalRatio(negativeTotalCalculate,positiveTotalCalculate);
    totalRatio.roundDecimalPoint(negativeTotalCalculate,positiveTotalCalculate); 
  }
}

const app = new App();
app.play();

module.exports = App;
