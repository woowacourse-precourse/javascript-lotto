const { QUERY } = require("./Constant");
const { readLine } = require("./UI");
const Validate = require("./Validate");

class App {
  amountBought;

  constructor() {
    this.amountBought = 0;
  }

  play() {
    this.askHowMuchBuy();
  }

  askHowMuchBuy() {
    readLine(QUERY.HOW_MUCH_BUY, (answer) => {
      Validate.checkMultipleOf1000(answer);
      this.amountBought = parseInt(answer, 10);
    });
  }
}

module.exports = App;
