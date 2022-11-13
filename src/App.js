const Clerk = require("./Clerk.js");

class App {
  constructor() {
    this.money = new Clerk().getBuyLottoMoney();
  }

  play() {}
}

module.exports = App;
