const LottoHandler = require('./utils/LottoHandler');

class App {
  constructor() {
    this.LottoHandler = new LottoHandler();
  };

  play() {
    this.LottoHandler.getPrice();
  };
};

const app = new App();
app.play();

module.exports = App;
