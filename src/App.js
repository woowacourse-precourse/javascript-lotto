const{ Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const LOTTO_PRICE = 1000;
const START_LOTTO_NUMBER = 1;
const END_LOTTO_NUMBER = 45;
const LOTTO_LENGTH = 6;
const FIRST_PRICE_MONEY = 2000000000;
const SECOND_PRICE_MONEY = 30000000;
const THIRD_PRICE_MONEY = 1500000;
const FOURTH_PRICE_MONEY = 50000;
const FIVETH_PRICE_MONEY = 5000;
const OVERLAP_COUNT_THREE = 3;
const OVERLAP_COUNT_FOUR = 4;
const OVERLAP_COUNT_FIVE = 5;
const OVERLAP_COUNT_SIX = 6;

class App {

  constructor() {
    this.purchaseAmount = 0;
    this.lottoAmount = 0;
    this.lottoList = [];
    this.luckyNumbers = 0;
    this.bonusNumber = 0;
    this.overlapList = [];
    this.countRankList = [];
    this.profitRates = 0;
  }

  play() {
    this.initPurchaseAmount();
  }

  initPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      this.validatePrice(answer);
      this.purchaseAmount = answer;

      this.printLottoAmount();
    })
  }

  validatePrice(answer) {
    if(answer % LOTTO_PRICE !== 0) {
      Console.close();
      throw new Error(`[ERROR] ${LOTTO_PRICE}원으로 나누어 떨어져야 합니다.`);
    }
  }

  printLottoAmount() {
    this.lottoAmount = this.purchaseAmount / LOTTO_PRICE;
    Console.print(`\n${this.lottoAmount}개를 구매했습니다.`);

    this.hasLottoList();
  }

  hasLottoList() {
    this.initLottoListNumbers();
    this.printLottoList();
  }

  initLottoListNumbers() {
    let lottoList = [];
    for(let idex = 0; idex < this.lottoAmount; idex++) {
      let makeLotto = Random.pickUniqueNumbersInRange(START_LOTTO_NUMBER, END_LOTTO_NUMBER, LOTTO_LENGTH);
      lottoList.push(makeLotto.sort((bigElement, littleElement) => bigElement - littleElement));
    }
    return this.lottoList = lottoList;
  }

  printLottoList() {
    for(let index = 0; index < this.lottoAmount; index++) {
      Console.print(`[${this.lottoList[index].join(", ")}]`);
    }

    this.initLuckyNumbers();
  }

  initLuckyNumbers() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (answer) => {
      let checkAnswer = answer.split(',');
      this.validateLuckyNumbers(checkAnswer);
      this.luckyNumbers = checkAnswer;
      
      this.initBonusNumber();
    })
  }

  validateLuckyNumbers(checkAnswer) {
    let lotto = new Lotto(checkAnswer);
    lotto.validate(checkAnswer);
  }

  initBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (answer) => {
      this.validateBonusNumber(answer);
      this.bonusNumber = answer;

      this.hasLottoRankingSystem();
    })
  }

  validateBonusNumber(answer) {
    let isContain = this.luckyNumbers.filter((value) => value === answer);
    if(isContain.length > 0) {
      Console.close();
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
    }
    let bonusArr = new Array(5).fill(null);
    bonusArr.push(answer);
    let lotto = new Lotto(bonusArr);
    lotto.validate(bonusArr);
  }

  hasLottoRankingSystem() {
    this.calcOverlapNumbers();
    this.calcRankCountNumbers();
    this.calcProfit();
    this.printRanking();
  }

  calcOverlapNumbers() {
    let count =  0;
    let result = [];
    for(let listIndex = 0; listIndex < this.lottoAmount; listIndex++) {
      for(let index = 0; index < LOTTO_LENGTH; index++) {
        let isContain = this.lottoList[listIndex].some(element => element == this.luckyNumbers[index]);
        if(isContain) count += 1;
      } 
      result.push(count);
      count = 0;
    }
    this.overlapList = result;
    return this.overlapList;
  }

  calcRankCountNumbers() {
    let countRankFive = this.overlapList.filter((value) => value === OVERLAP_COUNT_THREE).length;
    let countRankFour = this.overlapList.filter((value) => value === OVERLAP_COUNT_FOUR).length;
    let countRankOne = this.overlapList.filter((value) => value === OVERLAP_COUNT_SIX).length;
    let countRankThree = 0;
    let countRankTwo = 0;
    for(let index= 0; index < this.overlapList.length; index++) {
      if(this.overlapList[index] === OVERLAP_COUNT_FIVE){
        let isContain = this.lottoList[index].some(element => element == this.bonusNumber);
        if(isContain) countRankTwo += 1;
        if(!isContain) countRankThree += 1;
      }
    }
    return this.countRankList = [countRankFive, countRankFour, countRankThree, countRankTwo, countRankOne];
  }

  calcProfit() {
    let profit = this.countRankList[0] * FIVETH_PRICE_MONEY 
    + this.countRankList[1] * FOURTH_PRICE_MONEY 
    + this.countRankList[2] * THIRD_PRICE_MONEY
    + this.countRankList[3] * SECOND_PRICE_MONEY
    + this.countRankList[4] * FIRST_PRICE_MONEY;
    let calProfitRates = ((profit  / this.purchaseAmount) * 100);
    return this.profitRates = calProfitRates.toFixed(1);
  }

  printRanking() {
    Console.print('\n당첨통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.countRankList[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.countRankList[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.countRankList[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.countRankList[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.countRankList[4]}개`);
    Console.print(`총 수익률은 ${this.profitRates}%입니다.`);
    
    this.endGame();
  }

  endGame() {
    Console.close();
  }
}
let app = new App();
app.play();
module.exports = App;