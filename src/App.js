const USER = require("../src/User");

class App {
  play() {
    const User = new USER();
    
    let price = 0;
    let number = 0;
    let lottoNumber = [];

    price = User.enterLottoBuyPrice();
    number = User.lottoNumberOfPapers(price);
    lottoNumber = User.createLottoNumber(number);
  }
}

module.exports = App;
