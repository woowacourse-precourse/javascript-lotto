const { Console } = require('@woowacourse/mission-utils');
const Lotto = require("./Lotto.js");
const Customer = require("./Customer.js");

class App {
  constructor() {
    this.Customer = new Customer();
    this.Lottos = [];
  }

  play() {
    this.getTotalMoneyInput();
  }

  getTotalMoneyInput() {
    Console.readLine("구입금액을 입력해 주세요.\n", (totalMoney) => {
      this.isValidMoney(totalMoney);
      this.lottoAmount = totalMoney/1000;
      this.creatLottos();
      this.displayAllLottos();

      this.getWinningNum();
    })
  } 
  
  displayAllLottos() {
    Console.print("\n"+this.lottoAmount+"개를 구매했습니다.")
    this.Lottos.forEach((lotto) => {
      Console.print(lotto.getLottoNums());
    })
  }

  getWinningNum() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winningNumString) => {
      this.winningNum = new Lotto(this.stringToArray(winningNumString));
      this.getBonusNum();
    })
  }

  getBonusNum() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNum) => {
      this.isValidBonusNum(bonusNum);
      this.bonusNum = bonusNum;
    })
  }

  getMatchNum(lotto) {
    let match = 0;
    for (let num of lotto) {
      if(this.winningNum.includes(num)) matchs++;
    }
    return match;
  }

  isBonusMatch(lotto) {
    if(lotto.includes(this.bonusNum)) return true;
    return false;
  }

  getResultPlace(matchNum) {
    if(matchNum === 3) return 5;
    if(matchNum === 4) return 4;
    if(matchNum === 5 && !this.isBonusMatch()) return 3;
    if(matchNum === 5 && this.isBonusMatch()) return 2;
    if(matchNum === 6) return 1;
    return 6;
  }



  isValidBonusNum(bonusNum) {
    if(isNaN(bonusNum) || !Number.isInteger(Number(bonusNum))) {
      throw new Error("[ERROR] 보너스 번호는 정수형 입니다.");
    }

    if(1 > bonusNum || bonusNum > 45) {
      throw new Error("[ERROR] 보너스 번호의 범위는 1~45 입니다.");
    }

    for(let num of this.winningNum.getLottoNums()) {
      if(num === bonusNum) {
        throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
      }
    }
  }

  stringToArray(numString) {
    return numString.split(',').map(Number);
  }

  isValidMoney(money) {
    if(isNaN(money) || !Number.isInteger(Number(money))) {
      throw new Error("[ERROR] 구입 금액은 정수형 입니다.");
    }
    if(money % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위 입니다.");
    }
  }

  creatLottos() {
    for(let i=0; i<this.lottoAmount; i++) {
      this.Lottos.push(this.Customer.buyLotto());
    }
  }
}


let a = new App();
a.play();


module.exports = App;
