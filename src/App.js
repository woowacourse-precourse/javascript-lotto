const Lotto = require("./Lotto");

class App {
  play() {
    new Lotto().process();
  }
}

const app = new App();
app.play();

module.exports = App;
