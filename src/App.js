const { accountInput, winningNumberInput } = require("./libs/ui/Ui");

class App {
  play() {
    // accountInput();
    winningNumberInput();
  }
}

const app = new App();
app.play();

module.exports = App;
