const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE, SENTANCE,CORRECT, CORRECT_MONEY } = require("./constant/constant.js");

class Lotto {
  #numbers;
  
  constructor(numbers) {
    // this.validate(numbers);
    this.cost = 0;
    this.#numbers = numbers;
    this.mylotto = [];
    this.bonusNumber = 0;
    this.lottoCount = [];
    this.rankCount = 0;
    this.rankCountArray = [];
    this.earningProfit = 0;
    this.result = {
      [CORRECT_MONEY.FIRST] : 0,
      [CORRECT_MONEY.SECOND] : 0,
      [CORRECT_MONEY.THIRD] : 0,
      [CORRECT_MONEY.FOURTH] : 0,
      [CORRECT_MONEY.FIFTH] : 0,
    };

    this.match = {
      "FIRST" : 0,
      "SECOND" : 0,
      "THIRD" : 0,
      "FOURTH" : 0,
      "FIFTH" : 0,
    }
  }
  
  askLottoCost(){
    Console.readLine(`${MESSAGE.START}\n`,(cost) => {
      this.cost = Number(cost);
      this.lottoCount = parseInt(this.cost / 1000);
      this.printMylotto(this.lottoCount);
    })
  }

  sortLotto(lotto){
    lotto.sort((a,b) => {
      if (a>b) return 1;
      if (a === b) return 0;
      if (a < b) return -1 ;
    });
    return lotto;
  }

  printMylotto(lottoCount){
    Console.print(`${lottoCount}${SENTANCE.BUY}`);
    this.makeLottoNumber(lottoCount);
    this.mylotto.forEach((mylottoArray) => {
      Console.print(mylottoArray);
    });
    this.enterWinningNumber();
  }

  makeLottoNumber(lottoCount){
    for(let i = 0; i<lottoCount; i++){
      let lotto = Random.pickUniqueNumbersInRange(1,45,6);
      lotto = this.sortLotto(lotto);
      this.mylotto.push(lotto);
    }
  }

  enterWinningNumber(){
    Console.readLine(`${MESSAGE.WINNING}\n`,(winningNumber) => {
      this.#numbers = winningNumber.split(",").map(Number)
      this.enterBonusNumber();
    })
  }

  enterBonusNumber(){
    Console.readLine(`${MESSAGE.BONUS}\n`,(bonusNumber) => {
      this.bonusNumber = parseInt(bonusNumber);
      this.calcResults();
    })
  }

  calcResults(){
    this.mylotto.forEach((mylottoArray) => {
      this.compareNumbers(mylottoArray);
    })
    console.log(`rankCount ${this.rankCountArray}`);
    this.printResults();
  }

  compareBonusNumber(mylottoArray){
    if(mylottoArray.includes(this.bonusNumber)) return 7;
    return 5;
  }

  compareNumbers(mylottoArray){
    this.rankCount = 0;
    mylottoArray.forEach((number) => {
      if(this.#numbers.includes(number)){
        this.rankCount += 1;
      }
    }) 
    if(this.rankCount === 5){
      this.rankCount = this.compareBonusNumber(mylottoArray);
    }
    this.rankCountArray.push(this.rankCount);
  }

  printResults(){
    Console.print(`${SENTANCE.STATICS}`);
    Console.print(`${SENTANCE.LINE}`);
    this.matchRank(this.rankCountArray); 
    this.printWinnningResult()
 
  }

  printWinnningResult(){
    Console.print(`${CORRECT[5]}${this.match.FIFTH}${SENTANCE.UNIT}`);
    Console.print(`${CORRECT[4]}${this.match.FOURTH}${SENTANCE.UNIT}`);
    Console.print(`${CORRECT[3]}${this.match.THIRD}${SENTANCE.UNIT}`);
    Console.print(`${CORRECT[2]}${this.match.SECOND}${SENTANCE.UNIT}`);
    Console.print(`${CORRECT[1]}${this.match.FIRST}${SENTANCE.UNIT}`);
  }

  // 일치하는 개수 
  matchRank(rankCountArray){
    rankCountArray.forEach((count) => {
      if (count === 3) this.match.FIFTH += 1;
      if (count === 4) this.match.FOURTH += 1;
      if (count === 5) this.match.THIRD += 1;
      if (count === 7) this.match.SECOND += 1;
      if (count === 6) this.match.FIRST += 1;
    })
    
    
  }



  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }
}

module.exports = Lotto;
