const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {

  constructor(){
    this.START_MESSAGE = "구입금액을 입력해 주세요.";
    this.SELECT_WIN_NUMBER = "당첨 번호를 입력해 주세요.";
    this.SELECT_BONUS_NUMBER = "보너스 번호를 입력해 주세요.";
    this.RESULT_MESSAGE = "당첨 통계";
    this.RESULT_UNDERSCORE = "---";
    this.FIFTH_PLACE = "3개 일치 (5,000원) - ";
    this.FOURTH_PLACE = "4개 일치 (50,000원) - ";
    this.THIRD_PLACE = "5개 일치 (1,500,000원) - ";
    this.SECOND_PLACE = "5개 일치, 보너스 볼 일치 (30,000,000원) - ";
    this.FIRST_PLACE = "6개 일치 (2,000,000,000원) - ";
    this.selectedWinNumber = [];
    this.selectedBonusNumber = [];
    this.randomNumbersArr = [];
    this.randomNumbersArrForPrint = [];
    this.countMatchedNumber = [];
    this.countMatchedBonusNumber = [];
    this.myPayment = "";
    this.myCountedSheets = "";
    this.myRandomNumberArr= "";
  }
  play() {
    // const lotto = new Lotto();
    // lotto.pay();
    this.pay()
  }
  pay() {
    MissionUtils.Console.readLine(`${this.START_MESSAGE}\n`, (payment) => {
      this.myPayment = payment
      const countedSheets = payment / 1000;
      this.myCountedSheets = countedSheets
      this.printLotto();
    });
    this.getPayError()
  }
  getPayError(){
    if (this.myPayment % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요");
    }
    if(isNaN(this.myPayment)){
      throw new Error("[ERROR] 숫자만 입력해주세요");
    }
  }
  // 랜덤번호 배열 뽑기
  generateRandomNumbers() {
    const Rannumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedRandomNumbers = Rannumbers.sort((a, b) => a - b);
    this.randomNumbersArr.push(sortedRandomNumbers);

    const sortedRandomNumbersForPrint = Rannumbers.sort((a, b) => a - b).join(", ");
    this.randomNumbersArrForPrint.push(sortedRandomNumbersForPrint);
  }
  repeat(){ // 이름 바꾸기 랜덤번호 뽑기를 반복시켜주는 함수
    for (let i = 0; i < this.myCountedSheets; i++) {
      this.generateRandomNumbers();
    }
    const joined = this.randomNumbersArrForPrint.join(`]\n[`)
    return `[${joined}]`;
  }
  printLotto() { // 괄호에 countedSheets 있었음
    MissionUtils.Console.print(`\n${this.myCountedSheets}개를 구매했습니다.\n${this.repeat()}`);
    this.inputWinNumbers()
  }

  // 당첨번호 보너스번호 뽑기
  // selectWinNumbers() {
  //   MissionUtils.Console.print(this.SELECT_WIN_NUMBER);
  // }
  inputWinNumbers() {
    MissionUtils.Console.readLine(`\n${this.SELECT_WIN_NUMBER}\n`, (numbers) => {
      console.log(numbers.split(",").map(Number))
      const splited = numbers.split(",").map(Number)
      const lotto = new Lotto(splited);
      lotto.validate(splited); 

      const splitedWinNumber = numbers.split(",").map(Number);
      for (let i = 0; i < 6; i++) {
        this.selectedWinNumber.push(splitedWinNumber[i]);
      }

      MissionUtils.Console.print(""); // 공백
      this.selectBonusNumber();

    });
  }
  selectBonusNumber() {
    MissionUtils.Console.print(this.SELECT_BONUS_NUMBER);
    this.inputBonusNumber();
  }
  inputBonusNumber() {
    MissionUtils.Console.readLine("", (bonusNumber) => {
      this.selectedBonusNumber.push(Number(bonusNumber));
      MissionUtils.Console.print(""); // 공백
      this.compareNumbers();
    });
  }
  // 당첨번호 보너스번호 뽑기

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
    console.log(this.countMatchedNumber);
    console.log(this.selectedBonusNumber[0])
    this.getWinners()
  }
  getWinners() {
    // let firstPlace = 0;
    let secondPlace = 0;
    let thirdPlace = 0;
    // let fourthPlace = 0;
    // let fifthPlace = 0;

    // if (this.countMatchedNumber.includes(3)) fifthPlace++; //같은 당첨일때 수량이 늘어나야하는데 안늘어남. 
    let firstPlace = this.countMatchedNumber.filter(element => 6 === element).length
    // let secondPlace = this.countMatchedNumber.filter(element => 5 === element).length
    // let thirdPlace = this.countMatchedNumber.filter(element => 5 === element).length
    let fourthPlace = this.countMatchedNumber.filter(element => 4 === element).length
    let fifthPlace = this.countMatchedNumber.filter(element => 3 === element).length

    for (let i = 0; i <  this.countMatchedNumber.length; i++) {
      if(this.countMatchedNumber[i] === 5 && this.countMatchedBonusNumber[i] === 1){
        secondPlace++;
      }
    }
    for (let i = 0; i <  this.countMatchedNumber.length; i++) {
      if(this.countMatchedNumber.includes(5) && !this.countMatchedNumber[i] === 5 && this.countMatchedBonusNumber[i] === 1){
        thirdPlace++;
      }
    }
    // if (this.countMatchedNumber.includes(4)) fourthPlace++;
    // if(this.countMatchedNumber.includes(5) && this.countMatchedNumber.indexOf(5) !== this.countMatchedBonusNumber.indexOf(1)){
    //   thirdPlace++;
    // }
    // if(this.countMatchedNumber.indexOf(5) === this.countMatchedBonusNumber.indexOf(1)){
    //   secondPlace++;
    // }
    // if (this.countMatchedNumber.includes(6)) firstPlace++;

    this.calculateYieldRatio(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace);
  }
  calculateYieldRatio(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace){
    const firstReward = 2000000000
    const secondReward = 30000000
    const thirdReward = 1500000
    const fourthReward = 50000
    const fifthReward = 5000

    const addReward = (firstReward * firstPlace) + (secondReward * secondPlace) + (thirdReward * thirdPlace) +(fourthReward * fourthPlace) +(fifthReward * fifthPlace) 

    const positiveTotalCalculate = ((this.myPayment - addReward) / this.myPayment) * 100
    const negativeTotalCalculate = 100 - positiveTotalCalculate

    console.log(positiveTotalCalculate + "a")
    console.log(negativeTotalCalculate + "a")
    this.seeResult(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace,positiveTotalCalculate,negativeTotalCalculate);
    // this.removePositiveDecimalPoint(positiveTotalCalculate);
    // this.removeNegativeDecimalPoint(negativeTotalCalculate);
  }
  // removePositiveDecimalPoint(positiveTotalCalculate){
  //   // return +(Math.round(positiveTotalCalculate + "e+1")  + "e-1")
  //   return Math.round(positiveTotalCalculate*10)/10;
  // }
  // removeNegativeDecimalPoint(negativeTotalCalculate){
  //   return Math.round(negativeTotalCalculate*10)/10;
  //   // return +(Math.round(negativeTotalCalculate + "e+1")  + "e-1")
  // }
  ///결과 출력
  seeResult(firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace,positiveTotalCalculate,negativeTotalCalculate) {
    MissionUtils.Console.print(this.RESULT_MESSAGE);
    MissionUtils.Console.print(this.RESULT_UNDERSCORE);
    MissionUtils.Console.print(`${this.FIFTH_PLACE}${fifthPlace}개`);
    MissionUtils.Console.print(`${this.FOURTH_PLACE}${fourthPlace}개`);
    MissionUtils.Console.print(`${this.THIRD_PLACE}${thirdPlace}개`);
    MissionUtils.Console.print(`${this.SECOND_PLACE}${secondPlace}개`);
    MissionUtils.Console.print(`${this.FIRST_PLACE}${firstPlace}개`);
    MissionUtils.Console.close();

    // 수익률 판단 분리
    if (positiveTotalCalculate < 100){
      return MissionUtils.Console.print(`총 수익률은 ${negativeTotalCalculate}%입니다.`);}
    if(positiveTotalCalculate > 100) {
      return MissionUtils.Console.print(`총 수익률은 ${positiveTotalCalculate}%입니다.`)} ;
    if(positiveTotalCalculate === 100 && negativeTotalCalculate !== 0){
      return MissionUtils.Console.print("총 수익률은 100%입니다.")} ;
    if(negativeTotalCalculate === 0){
      return MissionUtils.Console.print("총 수익률은 0%입니다.")}
      
    }



}

const app = new App();
app.play();

module.exports = App;
