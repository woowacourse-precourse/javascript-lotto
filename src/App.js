const LottoGameController = require("./controller/LottoGameController");
class App {
  play() {
    new LottoGameController().start();
  }
}
const a = new App();
a.play();
module.exports = App;
