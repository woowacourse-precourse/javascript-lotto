const { Console } = require('@woowacourse/mission-utils');
const Lotto = require("./Lotto.js");
const Customer = require("./Customer.js");
const { LOTTO, MESSAGE, RESULT, PRISE, DISPLAY, ALERT} = require('./Const.js');

class App {
  constructor() {
    this.Customer = new Customer();
    this.Lottos = [];
  }

  play() {
    this.getTotalMoneyInput();
  }

  getTotalMoneyInput() {
    Console.readLine(MESSAGE.GET_MONEY, (totalMoney) => {
      this.isValidMoney(totalMoney);
      this.lottoAmount = totalMoney/LOTTO.PRISE;
      this.creatLottos();
      this.displayAllLottos();

      this.getWinningNum();
    })
  } 
  
  displayAllLottos() {
    Console.print(this.lottoAmount+MESSAGE.LOTTO_AMOUNT)
    this.Lottos.forEach((lotto) => {

      Console.print(DISPLAY.LEFT+lotto.getLottoNums().join(DISPLAY.UNIT)+DISPLAY.RIGHT);
    })
  }

  getWinningNum() {
    Console.readLine(MESSAGE.GET_WINNING_NUM, (winningNumString) => {
      this.winningNum = new Lotto(this.stringToArray(winningNumString));
      this.getBonusNum();
    })
  }

  getBonusNum() {
    Console.readLine(MESSAGE.GET_BONNUS_NUM, (bonusNum) => {
      this.isValidBonusNum(bonusNum);
      this.bonusNum = bonusNum;
      this.showTotalResult();
    })
  }

  showTotalResult() {
    const placeResult = this.getTotalResult();
    const moneyResult = this.getTotalMoney(placeResult);
    const earned = this.getYield(moneyResult);

    Console.print(RESULT.FIFTH + placeResult[5] + RESULT.UNIT);
    Console.print(RESULT.FOURTH + placeResult[4] + RESULT.UNIT);
    Console.print(RESULT.THIRD + placeResult[3] + RESULT.UNIT);
    Console.print(RESULT.SECOND + placeResult[2] + RESULT.UNIT);
    Console.print(RESULT.FIRST + placeResult[1] + RESULT.UNIT);
    Console.print(RESULT.YIELD + earned + RESULT.YEILD_UNIT);
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
    placeResult.forEach((num, index)=> {
      moneyResult[index] += PRISE[index] * num;
    })

    return moneyResult;
  }

  getYield(moneyResult) {
    let totalPrise = 0;
    for (const money of moneyResult) {
      totalPrise += money;
    }

    return (totalPrise / (this.Lottos.length * LOTTO.PRISE) * 100).toFixed(1);
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
      throw new Error(ALERT.HEADER+ALERT.BONUS_INT);
    }

    if(1 > bonusNum || bonusNum > 45) {
      throw new Error(ALERT.HEADER+ALERT.BONUS_RANGE);
    }

    for(let num of this.winningNum.getLottoNums()) {
      if(num === bonusNum) {
        throw new Error(ALERT.HEADER+ALERT.BONUS_UNIGUE);
      }
    }
  }

  stringToArray(numString) {
    return numString.split(DISPLAY.SPLIT_UNIT).map(Number);
  }

  isValidMoney(money) {
    if(isNaN(money) || !Number.isInteger(Number(money))) {
      throw new Error(ALERT.HEADER+ALERT.MONEY_INT);
    }
    if(money % 1000 !== 0) {
      throw new Error(ALERT.HEADER+ALERT.MONEY_UNIT);
    }
  }

  creatLottos() {
    for(let i=0; i<this.lottoAmount; i++) {
      this.Lottos.push(this.Customer.buyLotto());
    }
  }
}

module.exports = App;
