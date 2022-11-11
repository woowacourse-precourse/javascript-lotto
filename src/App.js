const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const Money = require("./Money");
const UI = require("./UI");

class App {
  play() {
    UI.lottoBuy();
    UI.winningNumber();
  }
}



module.exports = App;
