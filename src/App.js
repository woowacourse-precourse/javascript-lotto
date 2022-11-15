const LottoView = require("./LottoView");
const lottoView = new LottoView();

class App {
  play() {
    lottoView.startLotto();
  }
}

module.exports = App;
