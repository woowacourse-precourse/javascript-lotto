const LottoController = require("./domain/LottoController");

class App {
  play() {
    const lottoController = new LottoController();
    lottoController.start();
  }
}
const app = new App();
app.play();

module.exports = App;
