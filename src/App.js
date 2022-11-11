const { accountInput } = require("./libs/ui/Ui");

class App {
  play() {
    accountInput();
  }
}

const app = new App();
app.play();

module.exports = App;
