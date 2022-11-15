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
    Console.print(this.lottoAmount+"개를 구매했습니다.")
    this.Lottos.forEach((lotto) => {

      Console.print("["+lotto.getLottoNums().join(', ')+"]");
    })
  }

  getWinningNum() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (winningNumString) => {
      this.winningNum = new Lotto(this.stringToArray(winningNumString));
      this.getBonusNum();
    })
  }

  getBonusNum() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNum) => {
      this.isValidBonusNum(bonusNum);
      this.bonusNum = bonusNum;
      this.showTotalResult();
    })
  }

  showTotalResult() {
    const placeResult = this.getTotalResult();
    const moneyResult = this.getTotalMoney(placeResult);
    const earned = this.getYield(moneyResult);

    Console.print("3개 일치 (5,000원) - " + placeResult[5] + "개");
    Console.print("4개 일치 (50,000원) - " + placeResult[4] + "개");
    Console.print("5개 일치 (1,500,000원) - " + placeResult[3] + "개");
    Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + placeResult[2] + "개");
    Console.print("6개 일치 (2,000,000,000원) - " + placeResult[1] + "개");
    Console.print("총 수익률은 " + earned + "%입니다.");
  }

  getTotalResult() {
    let result = [0, 0, 0, 0, 0, 0]
    for(let lotto of this.Lottos) {
      const matchNum = this.getMatchNum(lotto.getLottoNums())
      const isBonusMatch = this.isBonusMatch(lotto.getLottoNums());
      const currResult = this.getResultPlace(matchNum, isBonusMatch);
      result[currResult]++;
    }
    return result;
  }

  getTotalMoney(placeResult) {
    let moneyResult = [0, 0, 0, 0, 0, 0];
    const prise = [
      0,
      2000000000,
      30000000,
      1500000,
      50000,
      5000
    ]
    placeResult.forEach((num, index)=> {
      moneyResult[index] += prise[index] * num;
    })

    return moneyResult;
  }

  getYield(moneyResult) {
    let totalPrise = 0;
    for (const money of moneyResult) {
      totalPrise += money;
    }

    return (totalPrise / (this.Lottos.length * 1000) * 100).toFixed(1);
  }

  getMatchNum(lotto) {
    let matchs = 0;
    for (let num of lotto) {
      if(this.winningNum.getLottoNums().includes(num)) matchs++;
    }
    return matchs;
  }

  isBonusMatch(lotto) {
    if(lotto.includes(this.bonusNum)) return true;
    return false;
  }

  getResultPlace(matchNum, isBonusMatch) {
    if(matchNum === 3) return 5;
    if(matchNum === 4) return 4;
    if(matchNum === 5 && !isBonusMatch) return 3;
    if(matchNum === 5 && isBonusMatch) return 2;
    if(matchNum === 6) return 1;
    return 0;
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

// let a = new App();
// a.play();


module.exports = App;
