const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constant.js");

class Lotto {
  #numbers;
  
  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
    this.mylotto = [];
    this.bonusNumber = 0;
    this.lottoCount = [];
  }
  
  askLottoCost(){
    Console.readLine(`${MESSAGE.START}\n`,(cost) => {
      this.cost = Number(cost);
      this.lottoCount = parseInt(this.cost / 1000);
      this.makeLottoNumber(this.lottoCount);
      this.enterWinningNumber();
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
      this.#numbers.push(this.bonusNumber);
      this.sortLotto(this.#numbers);
      this.printWinnningResult();
    })
  }

  printWinnningResult(){
    this.calcWinningResult();
  }

  calcWinningResult(){
    this.mylotto.forEach((mylottoArray) => {
      console.log(mylottoArray);
      this.compareNumbers(mylottoArray);
    })
  }


  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }
}

module.exports = Lotto;
