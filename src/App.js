const LottoScreen = require("./View/LottoScreen");

class App {
  play() {
    LottoScreen.insertMoney();
  }
}

const app = new App();
app.play();
module.exports = App;
