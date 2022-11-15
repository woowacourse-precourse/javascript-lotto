const Clerk = require("./Clerk");

class App {
  play() {
    const clerk = new Clerk();
    clerk.initLottoGame();
  }
}

const app = new App();
app.play();

module.exports = App;
