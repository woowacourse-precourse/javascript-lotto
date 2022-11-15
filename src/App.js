const USER = require("../src/User");
const LOTTOWINNINGNUMBER = require("../src/LottoWinningNumber");
const BONUSNUMBER = require("../src/BonusNumber");
const COMPARISONOFWINNINGNUMBERS = require("../src/ComparisonOfWinningNumbers");

class App {
  play() {
    const User = new USER();
    const LottoWinningNumber = new LOTTOWINNINGNUMBER();
    const BonusNumber = new BONUSNUMBER();
    let ComparisonOfWinningNumbers = null;
    
    let price = 0;
    let number = 0;
    let lottoNumber = [];
    let winningNumber = [];
    let bonusNumber = -1;
    let comparison = [];
    let checkTheNumber = [];
    let countAndSave = [];

    price = User.enterLottoBuyPrice();
    number = User.lottoNumberOfPapers(price);
    lottoNumber = User.createLottoNumber(number);
    winningNumber = LottoWinningNumber.lottoWinningNumber();
    winningNumber = LottoWinningNumber.lottoWinningNumberSort(winningNumber);
    while (bonusNumber === -1) {
      bonusNumber = BonusNumber.lottoBonusNumber();
      bonusNumber = BonusNumber.lottoBonusNumberDuplicationCheck(winningNumber, bonusNumber);
    }
    for (let i of lottoNumber) {
      ComparisonOfWinningNumbers = new COMPARISONOFWINNINGNUMBERS(i, winningNumber, bonusNumber, price);
      comparison = ComparisonOfWinningNumbers.comparison();
      checkTheNumber = ComparisonOfWinningNumbers.checkTheNumber(comparison);
      countAndSave.push(ComparisonOfWinningNumbers.countAndSave(checkTheNumber));
    }
    ComparisonOfWinningNumbers.checkTheRank(countAndSave);
    ComparisonOfWinningNumbers.RateOfReturn(price, countAndSave);
  }
}

module.exports = App;
