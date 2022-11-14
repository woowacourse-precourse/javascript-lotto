const LottoGameController = require("./LottoGameController");
class App {
  play() {
    new LottoGameController().start();
  }
}
const a = new App();
a.play();
module.exports = App;
