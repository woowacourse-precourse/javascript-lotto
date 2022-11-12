const LottoView = require('./LottoView');

class App {
  constructor() {
    this.LottoView = new LottoView();
  }

  play() {
    this.LottoView.progress();
  }
}

const app = new App();
app.play();

module.exports = App;
