const execute = require("./execute");
const lotto = new execute();
class App {
  play() {
    lotto.play();
  }
}

const app = new App();
app.play();
module.exports = App;
