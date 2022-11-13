const Clerk = require("./Clerk");

class App {
  play() {
    const clerk = new Clerk();
    clerk.inputLottoAmount();
  }
}

const app = new App();
app.play();

module.exports = App;
