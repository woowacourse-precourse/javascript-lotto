const InputView = require("./view/InputView");

class App {
  play() {
    const inputView = new InputView();
    inputView.inputMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
