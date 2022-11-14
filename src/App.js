const MoneyInput = require("./MoneyInput");

class App {
  play() {
    new MoneyInput().buyLotteryTickets();
  }
}

const app = new App();
app.play();

module.exports = App;
