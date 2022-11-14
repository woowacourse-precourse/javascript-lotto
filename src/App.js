const Lotto = require("./Lotto");
const Console = require("./utils/Console");
const UI = require("./utils/UI");

class App {
  play() {
    const ui = new UI();
    ui.askMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
