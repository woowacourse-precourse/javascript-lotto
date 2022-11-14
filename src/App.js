const AmountNumber = require("./numbers/AmountNumber");
class App {
  constructor() {
    this.amountNumber = new AmountNumber();
  }
  play() {
    this.amountNumber.amount();
  }
}
const app = new App();
app.play();
module.exports = App;
