const LottoStore = require('./LottoStore');

class App {
  constructor() {
    this.lottoStore = new LottoStore();
  }

  play() {
    this.lottoStore.enter();
  }
}

const app = new App();
app.play();

module.exports = App;
