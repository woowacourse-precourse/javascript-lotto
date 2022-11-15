const View = require("./View");
const lotto = new View();
class App {
  play() {
    lotto.lottoStart();
  }
}
const app = new App();
app.play();
module.exports = App;
