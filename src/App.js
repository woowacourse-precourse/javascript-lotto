const InputMoney = require("./InputMoney");

class App {
  play() {
    new InputMoney().buyLotteryTickets();
  }
}

const app = new App();
app.play();

module.exports = App;
