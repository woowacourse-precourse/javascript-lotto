const Lotto = require("./Lotto");

class App {
  constructor() {
    this.lotto = new Lotto();
  }

  play() {
    this.lotto.play();
  }

}


const app = new App();
app.play();

module.exports = App;
