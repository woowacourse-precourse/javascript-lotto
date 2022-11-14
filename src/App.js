const Execution = require("./Execution");
const lotto = new Execution();
class App {
  play() {
    lotto.play();
  }
}
const app = new App();
app.play();
module.exports = App;
