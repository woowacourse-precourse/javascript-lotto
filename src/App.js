const LottoManager = require("./LottoManager");
class App {
  constructor() {}
  play() {
    const lottoManager = new LottoManager();
    lottoManager.init();
  }
}
const app = new App();
app.play();

module.exports = App;
