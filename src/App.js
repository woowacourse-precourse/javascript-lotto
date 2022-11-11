const USER = require("../src/User");
const LOTTOWINNINGNUMBER = require("../src/LottoWinningNumber");
const BONUSNUMBER = require("../src/BonusNumber");

class App {
  play() {
    const User = new USER();
    const LottoWinningNumber = new LOTTOWINNINGNUMBER();
    const BonusNumber = new BONUSNUMBER();
    
    let price = 0;
    let number = 0;
    let lottoNumber = [];
    let winningNumber = [];
    let bonusNumber = -1;

    price = User.enterLottoBuyPrice();
    number = User.lottoNumberOfPapers(price);
    lottoNumber = User.createLottoNumber(number);
    winningNumber = LottoWinningNumber.lottoWinningNumber();
    winningNumber = LottoWinningNumber.lottoWinningNumberSort(winningNumber);
    while(bonusNumber === -1) {
      bonusNumber = BonusNumber.lottoBonusNumber();
      bonusNumber = BonusNumber.lottoBonusNumberDuplicationCheck(winningNumber, bonusNumber);
    }
  }
}

module.exports = App;
