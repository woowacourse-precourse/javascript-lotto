const USER = require("../src/User");
const LOTTOWINNINGNUMBER = require("../src/LottoWinningNumber");

class App {
  play() {
    const User = new USER();
    const LottoWinningNumber = new LOTTOWINNINGNUMBER();
    
    let price = 0;
    let number = 0;
    let lottoNumber = [];
    let winningNumber = [];

    price = User.enterLottoBuyPrice();
    number = User.lottoNumberOfPapers(price);
    lottoNumber = User.createLottoNumber(number);
    winningNumber = LottoWinningNumber.lottoWinningNumber();
    winningNumber = LottoWinningNumber.lottoWinningNumberSort(winningNumber);
  }
}

module.exports = App;
